const FREE_WARNING = "Free shipping only applies to single customer orders";
const BANNED_WARNING = "Unfortunately we do not ship to your country of residence";
const NONE_SELECTED = 0;

const customers = 1;
const country = "RSA";
let currency = null;
let shipping = null;

const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * NONE_SELECTED;
const batteries = 35 * 2;
const pens = 5 * NONE_SELECTED;

const price = shoes + toys + batteries + pens + shirts;

if (country === "RSA" && price < 1000) {
  currency = "R";
  shipping = 400;
} else if (country === "RSA" && customers === 1 && price >= 1000) {
  currency = "R";
  shipping = 0;
} else if (country === "NAM" && price < 60) {
  currency = "$";
  shipping = 600;
} else if (country === "NAM" && customers === 1 && price >= 60) {
currency = "$";
shipping = 0;
} else {
shipping = 800; 
currency = "$";
}

if (shipping === 0 && customers !== 1) {
  console.log(FREE_WARNING);
}

 if (country === "NK") {
  console.log(BANNED_WARNING);
 }

 else {
  console.log(currency, price + shipping);
}


