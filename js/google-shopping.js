// Require is a node-specific thing, so run
// your file in the terminal with the node command!
// e.g., node js/google-shopping.js
let data = require('../products.json')

// This is a print out of all the items in the data
//console.log(data.items)

// Next, it's recommended to just look at the first item
console.log(data.items[0])

// YOUR CODE BELOW
// 1.) Go through the `items` and find all results that have `kind` of
// `shopping#product`. Print the count of these results. Where else is
// this count information stored in the search results?

console.log('\nProblem 1:\n')
let count = 0;

for (let item of data.items) {
    if (item.kind === 'shopping#product') {
        count++;
    }
}
console.log("The count of the result is ", count);

// 2.) Print the `title` all items with a `backorder` availability
// in `inventories`.

console.log('\nProblem 2:\n')
for (let item of data.items) {
    if (item.product.inventories[0].availability === 'backorder') {
        console.log(item.product.title + '\n');
    }
}

// 3.) Print the `title` all items with more than one image link.

console.log('\nProblem 3:\n')
for (let item of data.items) {
    if (item.product.images.length > 1) {
        console.log(item.product.title + '\n');
    }
}

// 4.) Print all "Canon" products in the items
// HINT: careful with case sensitivity!

console.log('\nProblem 4:\n')
for (let item of data.items) {
    if (item.product.brand === 'Canon') {
        console.log(item.product.title + '\n');
    }
}

// 5.) Print all `items` that have an author name of "eBay" and are
// brand "Canon".
// HINT: What is the type of author?

console.log('\nProblem 5:\n')
for (let item of data.items) {
    if (item.product.author.name === "eBay" && item.product.brand === 'Canon') {
        console.log(item);
    }
}
// for (let i = 0; i < data.items.length; i++) {
//     if (data.items[i].product.brand === 'Canon' && data.items[i].product.author.name === "eBay") {
//         console.log(data.items[i]);
//     }
// }

// 6.) Print all the products with their **brand**, **price**,
// and an **image link**
// HINT: You can just use the first (0th) element in the images
// and inventories arrays.

console.log('\nProblem 6:\n')
for (let item of data.items) {
    console.log(item.product.brand, '\n', item.product.inventories[0].price, '\n', item.product.images[0].link, '\n');
}