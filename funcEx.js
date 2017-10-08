/************The first Function [ isEven() ]**************/
function isEven(x) {
  if (x%2==0) {
    return true;
  }
  else {
    return false;
  }
}

//Run function for isEven()
function runFunc(input) {
  var ans = isEven(input);
  console.log("The input is "+input)
  console.log(ans);
}

/************The second Function [ factX() ]**************/
function factX(num){
  if (typeof num != "number") {
    return "Not a number"
  }
  else if (num<0) {
    return "Negative factorial is not possible"
  }
  else if (num==0) {
    return 1
  }
  else {
    var fact = 1;
    var count = num;
    while (count>0) {
      fact = fact * count;
      count--;
    }
    return fact;
  }
}

/*****************Third FUnction************************/
function kebabToSnake(str) {
  //METHOD 1 - using traditional conditions and catenate strings with substrings before and after index
  /*
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i)==="-") {
      str=str.substr(0,i)+"_"+str.substr(i+1);
    }
  }
  */

  //METHOD 1 - replace at using /g global modifier
  str = str.replace(/-/g,"_");
  return str;
}




/****Running the first function****/
/*
runFunc(5);
runFunc(6);
*/
/*********running factX()**********/

/*console.log(factX("hello"));
console.log(factX(-5));
console.log(factX(0));
console.log(factX(3));
*/

/***Running the third function***/
console.log(kebabToSnake("hi-how-are-you-doing? i-am-good"));
