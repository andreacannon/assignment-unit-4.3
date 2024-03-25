console.log('***** Cart Functions *****');

let basket = [];
console.log("Basket contents: ", basket); //global variable basket, an empty array. 

function addItem (item) {
    basket.push(item);
    return true;
}
addItem('almonds');
addItem('cashews');
console.log("Basket contents: ", basket); //function to add items. 

function listItems() {
    for (let i = 0; i < basket.length; i++) {
        console.log(basket[i]);
    }
}
listItems()
console.log("Basket contents: ",basket);








// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
