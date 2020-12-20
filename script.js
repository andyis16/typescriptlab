// Typescript Lab 4
var mountains = [
    { name: 'Kilimanjaro', height: 19341 },
    { name: 'Everest', height: 29029 },
    { name: 'Denali', height: 20310 }
];
//console.log("hello");
function findNameOfTallestMountain(mountains) {
    var tallestName = "";
    var tallest = mountains[0];
    mountains.forEach(function (mountains) {
        if (mountains.height > tallest.height) {
            tallest = mountains;
            tallestName = mountains.name;
        }
    });
    return tallestName;
}
var tallestName = findNameOfTallestMountain(mountains);
console.log(tallestName);
var products = [
    { name: 'Icecream', price: 1.50 },
    { name: 'Apples', price: 2.50 },
    { name: 'Coffee', price: 5.90 }
];
//console.log("hello");
function calcAverageProductPrice(products) {
    var i = 0;
    var total = 0;
    var average = 0;
    var product = products[0];
    products.forEach(function (product) {
        total += product.price;
    });
    average = total / (products.length);
    var averages = average.toFixed(2);
    return averages;
}
var average = calcAverageProductPrice(products);
console.log("$ " + average);
var inventory = [
    { product: {
            name: 'motor',
            price: 10.00
        },
        quantity: 10 },
    { product: {
            name: 'sensor',
            price: 12.50
        },
        quantity: 4 },
    { product: {
            name: 'LED',
            price: 1.00
        }, quantity: 20 }
];
function calcInventoryValue(items) {
    var i = 0;
    var total = 0;
    for (i = 0; i < items.length; i++) {
        total += items[i].product.price * items[i].quantity;
    }
    return total;
}
var total = calcInventoryValue(inventory);
console.log("$ " + total);
