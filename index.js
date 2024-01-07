// 1) Declare customerName to be 'bob' in global scope and return the customerName
var customerName = 'bob';

// 2) Write a function that modifies the customerName variable
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase(B0B);
}

// 3) Write a function that, when called, declares a variable called bestCustomer in global scope and assigns it to be 'not bob'
function setBestCustomer() {
  bestCustomer = 'not bob';
  return bestCustomer;
}

// 4) Write a function that overwrites the best customer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
  return bestCustomer;
}
let leastFavoriteCustomer = "John";


function changeLeastFavoriteCustomer(newCustomer) {
    leastFavoriteCustomer = newCustomer(Collins);
}



// Testing the functions
console.log(customerName); // Output: bob

upperCaseCustomerName();
console.log(customerName); // Output: BOB

console.log(setBestCustomer()); // Output: not bob

console.log(overwriteBestCustomer()); // Output: maybe bob

changeLeastFavoriteCustomer("Collins");
console.log(leastFavoriteCustomer); // It should print the updated leastFavoriteCustomer

