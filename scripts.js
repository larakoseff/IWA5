const FREE_WARNING = "Free shipping only applies to single customer orders";
const BANNED_WARNING = "Unfortunately we do not ship to your country of residence";
const NONE_SELECTED = "0";

let customers = 1;
let country = "RSA";
let currency = null;
let shipping = null;

let shoes = 300 * 1;
let toys = 100 * 5;
let shirts = 150 * NONE_SELECTED;
let batteries = 35 * 2;
let pens = 5 * NONE_SELECTED;

let price = shoes + toys + batteries + pens + shirts;

if (country == "RSA" && price < 1000) {
  currency = "R";
  shipping = 400;
} else if (country == "RSA" && customers == 1 && price >= 1000) {
  currency = "R";
  shipping = 0;
} else if (country == "NAM" && price < 1000) {
  currency = "$";
  shipping = 600;
} else if (
  country == "NAM" &&
  currency == "$" &&
  customers == 1 &&
  price >= 1000
) {
  shipping = 0;
} else if (country == "NK") {
  console.log(BANNED_WARNING);
} else {
  shipping == 800 && currency == "$";
}

if (price > 60 && currency == "$" && country == "NAM" && customers == 1) {
  let shipping = 0;
}

if (shipping === 0 && customers !== 1) {
  console.log(FREE_WARNING);
}

console.log(currency, price + shipping);
