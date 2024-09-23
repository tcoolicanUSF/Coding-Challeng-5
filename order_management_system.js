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
    orderedItems.array.forEach(item => {
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

//Task 4: Create a Function to Calculate Total for an Order
