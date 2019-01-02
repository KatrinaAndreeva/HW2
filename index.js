//1.
let goods = {
    product: "Iphone"
}
goods.price = 1000;
goods.currency = "dollar";
goods.model = "7";
goods.color = "red";
console.log(goods);

//2.
let a = 0 || 'string'; //string, или спотыкается на true, 0 - false
console.log(a);
let b = 1 && 'string'; //string, ищет false, если не находит выводит последнее true
console.log(b);
let c = null || 25; //25, выводит true
console.log(c);
let d = null && 25; // null, т.к. это false, null не равен ничему кроме undefined
console.log(d);
let e = null || 0 || 35; // 35 единственное true
console.log(e);
let f = null && 0 && 35; // null, спотыкается на первом же false
console.log(f);


//задачи
//1.
let type = prompt('Enter visible or hidden', '');
if (type == "visible") {
    type = "hidden";
} else if (type == 'hidden') {
    type = "visible";
} else {
    type = 'try again'
}
alert(type);

//2.
let theNum = prompt("Enter your number", );
if (theNum === 0) {
    theNum = 1;
} else if (theNum < 0) {
    theNum = "less then zero";
} else {
    theNum *= 10;
}
alert(theNum);

//3.
let car = {
    name: 'Lexus',
    age: 10,
    create: 2008,
    needRepair: false
}
if (car.age > 5) {
    console.log("Need Repair");
    car.needRepair = true;
} else {
    car.needRepair = false;
}

//4.
let item = {
    name: 'Intel core i7',
    price: '100$',
    discount: '15%'
}
if (item.discount && parseInt(item.discount) > 0) {
    item.priceWithDiscount = parseInt(item.price) - (parseInt(item.price) * (parseInt(item.discount) / 100));
    console.log(item.priceWithDiscount + '$');
} else {
    console.log(item.price);
}

//5
let product = {
    name: 'Яблоко',
    price: '10$'
};
let min = 10;
let max = 20;
if (parseInt(product.price) >= min && parseInt(product.price) <= max) {
    console.log(product.name);
} else {
    console.log('товар не найден')
}