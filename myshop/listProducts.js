/*var faker = require('faker');
console.log("=======================")
console.log("FAKER PRODUCT CATALOGUE")
console.log("=======================")
for (let i =1; i<=10; i++){
  console.log(i+ ": " + faker.commerce.productName() + ", $" + faker.commerce.price());
}*/


var knock_knock = require('knock-knock-jokes')

for (let i=0; i<8; i++){
  console.log(knock_knock() + "\n")
}
