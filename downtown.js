const TAX_RATE = 0.07;
const MOPED_PRICE = 800;
const ACCESSORY_PRICE = 49.99;

var budget = prompt("What up, what's your budget");
var amount = 0;


function addTax(amount) {
    return amount + (amount * TAX_RATE);
}

function formatAmount(amount) {
    return "$" + amount.toFixed(2);
}

while (amount < (budget - MOPED_PRICE)) {
    amount = amount + MOPED_PRICE;
    if (amount < (budget - ACCESSORY_PRICE)) {
        amount = amount + ACCESSORY_PRICE;
    }
}

console.log("subtotal: " + formatAmount(amount));
console.log("grand total: " + formatAmount(addTax(amount)));

if (budget === "Honestly, I don't know nuthin bout no mopeds.") {
    console.log("I got the one for you! Follow me!");
    } else if (amount == 0) {
    console.log("Can't help ya bud.");
        } else if (addTax(amount) >= budget) {
        console.log("Can't help ya bud. Blame the gov.");
            } else {
            console.log("Goin' DOWNTOWN.")
}