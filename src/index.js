import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// var products = [
//   { name: "carrot", type: "vegitable" },
//   { name: "cucumber", type: "vegitable" },
//   { name: "banana", type: "fruit" },
//   { name: "Mango", type: "fruit" }
// ];

// var filteredProducts = [];

// //Using For loop method

// console.log("Using For loop method");

// for (var i = 0; i < products.length; i++) {
//   if (products[i].type === "fruit") {
//     filteredProducts.push(products[i]);
//   }
// }

// console.log(filteredProducts);

// //Using Filter  method

// console.log("Using Filter  method");

// var newfilteredProducts = products.filter(function (item) {
//   return item.type === "vegitable";
// });

// console.log(newfilteredProducts);

// var productList = [
//   { name: "carrot", type: "vegitable", quantity: 0, price: 25 },
//   { name: "cucumber", type: "vegitable", quantity: 10, price: 5 },
//   { name: "banana", type: "fruit", quantity: 30, price: 12 },
//   { name: "Mango", type: "fruit", quantity: 5, price: 8 }
// ];

// // type is "vegitable" ,quantity is greater than 0 , price is less than 10

// var prod = productList.filter(function (product) {
//   return (
//     product.type === "vegitable" && product.price < 10 && product.quantity > 0
//   );
// });

// console.log(prod);

// Real Time Example

// var post = { id: 4, title: "New Post" };

// var comments = [
//   { postId: 4, content: "awesome post" },
//   { postId: 3, content: "it was Ok" },
//   { postId: 4, content: "Neat" }
// ];

// function commentsForPost(post, comments) {
//   return comments.filter(function (comment) {
//     return comment.postId === post.id;
//   });
// }
// console.log(commentsForPost(post, comments));

// Practice Examples

// var numbers = [15, 25, 35, 45, 65, 75, 85, 95];

// var filteredNumbers = numbers.filter(function (num) {
//   return num > 50;
// });

// console.log(filteredNumbers);

// var users = [
//   { id: 1, admin: true },
//   { id: 2, admin: false },
//   { id: 3, admin: false },
//   { id: 4, admin: true },
//   { id: 5, admin: true }
// ];

// var filterUsers = users.filter(function (user) {
//   return user.admin === true;
// });

// console.log(filterUsers);

// A Bettter and Difficult example to Understand

// This is a hard one! Create a function called 'reject'.
// Reject should work in the opposite way of 'filter' - if a function returns 'true', the item should not be included in the new array.
// Hint: you can reuse filter.

// For example:

// var numbers = [10, 20, 30];
// var lessThanFifteen = reject(numbers, function(number){
//   return number > 15;
// });
// lessThanFifteen // [ 10 ];
// function reject(array, iteratorFunction) {

// }

var numbers = [10, 20, 30];
//define a function 'reject' which takes array and a function
function reject(array, iteratorFunction) {
  return array.filter(function (item) {
    return !iteratorFunction(item);
  });
}
//call the function 'reject' and assign the value to the variable 'lessThanFifteen'
var lessThanFifteen = reject(numbers, function (number) {
  return number > 15;
});
console.log(lessThanFifteen);
