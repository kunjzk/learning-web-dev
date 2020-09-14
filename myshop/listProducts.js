var faker = require('faker');
console.log("=======================")
console.log("FAKER PRODUCT CATALOGUE")
console.log("=======================")
for (let i =1; i<=10; i++){
  console.log(i+ ": " + faker.commerce.productName() + ", $" + faker.commerce.price());
}
