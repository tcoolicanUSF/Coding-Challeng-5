//Coding Challenge #5
//Task 1: Create an Inventory Array of Product Objects
// Inventory array with product objects
const inventory = [
    {
        name: 'Riddell Axiom',
        price: 759.99,
        quantity: 50},
    {
        name: 'Schutt F7',
        price: 499.99,
        quantity: 100},
    {
        name: 'Riddell Speeflex',
        price: 499.99,
        quantity: 100},
    {
        name: 'VICIS Zero2',
        price: 799.99,
        quantity: 50}
//These are the most commonly used football helmets
];
console.log(inventory);

//Task 2: Create an Orders Array of Order Objects
let orders = [];

//Task 3: Create a Function to Place an Order

function placeOrder(customerName, orderedItems) {
    orderedItems.forEach(item => {
        let product = inventory.find(product => product.name === item.name);
        if (!product || product.quantity < item.quantity) {
            return `ERROR: No stock available for ${item.name}` //Error Response Text
        } else {
            return product.quantity -= item.quantity
        }})

orders.push({
    customerName,
    item: orderedItems,
    status: 'Pending'
});
}
//Order Test 
placeOrder('Tua Tagovailoa', [
    {name: 'Riddell Axiom', quantity: 3},
    {name: 'Schutt F7', quantity: 2}
])

//Task 4: Create a Function to Calculate Total for an Order
function calculateOrderTotal(order) {
    return order.item.reduce((totalOrder, item) => {
        let product = inventory.find(product => product.name === item.name);
        return totalOrder + (item.quantity * product.price)
    }, 0);
}
//Order Test
let TuaOrder = orders [0]
console.log(`Tua's order total is: $${calculateOrderTotal(TuaOrder)}`)

//Task 5: Create a Function to Mark an Order as Completed
function completeOrder (customerid){
    let order = orders.find(order => order.name === customerid)
    if (orders.status = 'Pending') {
        return orders.status = 'Completed'
    }}

//Customer ID Test
console.log(completeOrder("TuaTagovailoa"))

//Task 6: Create a Function to Check Pending Orders
