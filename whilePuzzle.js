var counter = 0;
alert("connected");

//first
console.log("Problem 1");
counter = -10;
while (counter<20) {
  console.log(counter);
  counter++;
}

//second
console.log("second");
counter = 10;
while (counter<=40) {
  console.log(counter);
  counter+=2;
}

//third
console.log("third");
counter = 300;
while (counter<=333) {
if (counter%2!=0) {
  console.log(counter);
}
counter++;
}

//fourth

console.log("fourth");
counter = 5;
while (counter<=50) {
  if ((counter%3==0)&&(counter%5==0)) {
    console.log(counter);

  }
  counter++;
}
