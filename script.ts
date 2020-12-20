// Typescript Lab 4

// Declare an interface called Mountain

interface Mountain {
    name: string;
    height: number;
}

const mountains: Mountain[]=[
    {name: 'Kilimanjaro', height: 19341},
    {name: 'Everest', height: 29029},
    {name: 'Denali', height: 20310}
];

//console.log("hello");

function findNameOfTallestMountain (mountains: Mountain[]) {
    let tallestName: string ="";
    let tallest: Mountain = mountains[0];
    
    mountains.forEach(function (mountains) {
        if (mountains.height > tallest.height) {
            tallest = mountains;
            tallestName = mountains.name;
        }
        
    }); 

    return tallestName;
}

const tallestName = findNameOfTallestMountain(mountains);
console.log(tallestName);

// Declare an interface called Product

interface Product {
    name: string;
    price: number;
}

const products: Product[]=[
    {name: 'Icecream', price: 1.50},
    {name: 'Apples', price: 2.50},
    {name: 'Coffee', price: 5.90}
];

//console.log("hello");

function calcAverageProductPrice (products: Product[]) {
    let i: number = 0;
    let total: number = 0;
    let average: number = 0;
    let product: Product = products[0];
    
    products.forEach(function (product) {
            total += product.price;
            }
        
    ); 
        average = total / (products.length);
        let averages = average.toFixed(2)
        return averages;
    }

const average = calcAverageProductPrice (products);
console.log("$ " + average);

// Declare an interface called InventoryItem

interface InventoryItem {
    product: Product;
//    price: Product;
    quantity: number;
}

const inventory: InventoryItem[]=[
    {product: {
        name: 'motor', 
        price: 10.00
     },
     quantity: 10},
    {product: {
        name: 'sensor', 
        price: 12.50
     }, 
     quantity: 4},
    {product: {
        name: 'LED',
        price: 1.00
    }, quantity: 20}
];

function calcInventoryValue (items: InventoryItem[]) {
    let i: number = 0;
    let total: number = 0;

    for (i=0; i<items.length; i++) {
        total += items[i].product.price * items[i].quantity;
    }
    return total;   

}

const total = calcInventoryValue(inventory);
console.log("$ " + total);


