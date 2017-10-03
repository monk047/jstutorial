console.log("Hello");
var age = Number(prompt("Please enter your age"));

if (age<0) {
  console.log("Age can not be negative");
}
else if (age==21) {
  console.log("Happy 21st birthday.");
}
else if (age%2!=0) {
  console.log("your age is odd.");
}
else {
  console.log("Nothing particular. No cases matched");
}


if (Math.sqrt(age)%1==0) {
  console.log("Your age is a perfect square.");
}
