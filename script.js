// alert( `I’m JavaScript!`);

// alert("I'm JavaScript!");
// alert('Hello') // this line is not having semicolon
// alert(`World`)
// alert(3 + 1 + 2); // this is multiple line code and its workinG

// let admin=9, fname=10.5;
// fname = "Guvi";
// lname = "geek"
// admin = fname+" "+lname;
// alert( admin ); // "Guvi geek"

// let fname=10.5;
// fname = "Guvi";
// lname = "geek"
// let name = fname+" "+lname;
// alert( `hello ${name}` );

// let a = prompt("First number?");
// let b = prompt("Second number?");
// alert( parseFloat(a) + parseFloat(b));

// var a = parseFloat("2") > parseFloat("12");
// //Don't touch below this
// if (a) {
//   console.log("Code is Blasted")
// }
// else
// {
//   console.log("Diffused")
// }

// let a = prompt("Enter a number?");
//  a = false;
// //Don't modify any code below this
// if (a) {
//  console.log( 'OMG it works for any number inc 0' );
// }
// else
// {
//  console.log( "Success" );
// }

// let value = prompt('How many runs you scored in this ball');
// if (parseInt(value) === 4) {
//       console.log("You hit a Four");
// } else if (parseInt(value) === 6) {
//       console.log("You hit a Six");
// } else {
//       console.log("I couldn't figure out");
// }

// let login = 'Employee';
// let message = (login == 'Employee') ? (login="Employee Login"): (login == 'Director') ? 'Greetings' :  (login == '') ? 'No login' : '';
// console.log(message);

// You cant change the value of the msg
// let message;
// if (null || 2 || undefined) {
//    message = "welcome boss";
// } else {
//    message = "Go away";
// }
// console.log(message);

// let message;
// let lock = 2;
// lock =false
// //Dont change any code below this
// if (null || lock || undefined )
// {
//   message = "Go away";
// }
// else
// {
//  message = "welcome";
// }
//   console.log(message);

// let message;
// let lock = !2;
// //Dont change any code below this
// if (lock && " " || undefined )
// {
//   message = "Go away";
// }
// else
// {
//  message = "welcome";
// }
// console.log(message);

//You can change only 2 characters
// let i = 3;
// while (i) {
//   console.log( i-- );
// }
// let num=1;
// for(let i=num;i<=10;i++){
//     console.log(i)
// }

//You are allowed to modify only one character
// for (let num = 2; num <= 20; num += 2) {
//     console.log(num)
//   }

// let gifts = ["teddy bear", "drone", "doll"];
// for (let i = 0; i < 3; i++) {
//   console.log(`Wrapped ${gifts[i]} and added a bow!`);
// }

// let countdown = 100;
// while (countdown > 0) {
//   countdown--;
//   if (countdown == 0 && countdown) {
//     console.log("bomb triggered");
//   }else{
//     console.log("bomb disarm");

//   }
// }

// var lemein = "0";
// var lemeout = 0;
// var msg = "";
//  // lemein is zero but as string and any value as string considered true
// if (lemein) {
//   msg += "hi";
// }
// // its false because is int
// if (lemeout) {
//   msg += "Hello";
// }
// console.log(msg);

// var lemein = "0";
// var lemeout = 0;
// var msg = "";

// if (lemein) {
//  msg +="hi";
//  }
// if (lemeout) {
//  msg += 'hello';
// }
// console.log(msg); //  output hi

// var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var new_string = "";

// for (var i = 0; i < numsArr.length; i++) {
//   new_string += numsArr[i] + ",";
// }

// console.log(new_string.split(","));
// var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var new_string = "";

// for (var i = 0; i < numsArr.length; i++) {
//   new_string += numsArr[i] + ",";
// }

// console.log(new_string.split(","));

// var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var new_string = "";

// for (var i = numsArr.length - 1; i >= 0; i--) {
//   new_string += numsArr[i];

//   if (i > 0) {
//     new_string += " ";
//   }
// }

// console.log(new_string);

// var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// for (var i = 0; i <= 10; i++) {
//   if (numsArr[i] % 2 == 0) {
//     numsArr[i] = "Even";
//   }
// }
// console.log(numsArr);

// var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var sum=0;
// for (var i = 0; i <= 10; i++) {

//   sum += numsArr[i];
// }
// console.log(sum);

// var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var sum = 0;
// for (var i = 0; i < 10; i++) {
//   if (numsArr[i] % 2 == 0) {
//     sum += numsArr[i];
//   }
// }
// console.log(sum);

// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var sum=100;
// var oddSum=0;
// var eveSum=0;
// for (var i = 0; i <=10; i++) {
//  if(numsArr[i]%2!=0)
//  {
//  eveSum += numsArr[i]
//  }
//  else
//  {
//   oddSum -= numsArr[i]
//  }
// }
// console.log(oddSum,eveSum);

// var numsArr = [[1, 2, 3, 4, 5],[6, 7, 8, 9, 10, 11]];
// for (var i = 0; i < numsArr.length; i++) {
//     console.log( numsArr[i])
//    }

// var numsArr = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10, 11],
// ];

// for (var i = 0; i < numsArr.length; i++) {
//   var inner_array = numsArr[i];
//   console.log(...inner_array);
// }

// var numsArr = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10, 11],
// ];

// for (var i = 0; i < numsArr.length; i++) {
//   var inner_array = numsArr[i];
//   for (var j = 0; j < inner_array.length; j++)
//     if (inner_array[j] % 2 == 0) {
//       inner_array[j] = "even";
//     }
// }
// console.log(numsArr);

// var numsArr = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10, 11],
// ];
// for (var i = 0; i < numsArr.length; i++) {
//     console.log(numsArr[i].reverse())
// }

// var numsArr = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10, 11],
// ];
// var sum_odd = 0;
// var sum_even = 0;
// for (var i = 0; i < numsArr.length; i++) {
//   var inner_array = numsArr[i];
//   for (var j = 0; j < inner_array.length; j++) {
//     if (inner_array[j] % 2 != 0) {
//       sum_odd += inner_array[j]
//     } else {
//       sum_even += inner_array[j]
//     }
//   }
// }
// console.log(sum_odd);
// console.log(sum_even);

// const aa = (f, s, t) => {
//     if (f > s && f > t) {
//       console.log(f);
//     } else if (s > f && s > t) {
//       console.log(s);
//     } else {
//       console.log(t);
//     }
//   }
// aa(1, 2, 3);

// let n = 123;
// console.log(add(n));

// function add(n) {
//   let sum = 0;
//   let numStr = n.toString();
//   for (var i = 0; i < numStr.length; i++) {
//     sum += parseInt(numStr[i]);
//   }
//   return sum;
// }

// const arr = [9, 8, 5, 6, 4, 3, 2, 1];

// (function() {
//   let sum = 0;
//   for (var i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   console.log(sum);
//   return sum;
// })();

// var arr = ["guvi", "geek", "zen", "fullstack"];
// var titleCase = function(str) {
//   return str.toLowerCase().split(' ').map(function(word) {
//     return word.replace(word[0], word[0].toUpperCase());
//   }).join(' ');
// }

// var ano = function(arro) {
//   for (var i = 0; i < arro.length; i++) {
//     console.log(titleCase(arro[i]));
//   }
// }

// ano(arr);

// const newArray = [1, 3, 2, 5, 10];

// const isPrime = num => {
//   if (num <= 1) {
//     return false;
//   }

//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }

//   return true;
// };

// const myPrime = newArray.filter(num => isPrime(num));

// console.log(myPrime); // [3, 2, 5]

// const num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// const sum = num.reduce((a, b) => a + b, 0);
// console.log(sum); // 550

// var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
// var k = 3;
// k = k % arr.length;
// (function() {
//   var out = arr.slice(k, arr.length).concat(arr.slice(0, k));
//   console.log(out);
// })();

// var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
// (function () {
//   var total = 0;
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 != 0) {
//       total += arr[i];
//     }
//   }

//   console.log(total);
// })();

// (function (str) {
//   str1 = str.split("").reverse().join("");
//   console.log(str1);
// })("abcd");

// var res = function (arr) {
//     newArr = [];

//     for (var i = 0; i < arr.length; i++) {
//     if (!newArr.includes(arr[i])) {
//       newArr.push(arr[i]);
//     }
//   }
//   console.log(newArr);
// };
// res(["guvi", "geek", "guvi", "duplicate", "geeK"]);

// var array = [
//   [
//     ["firstname", "vasanth"],
//     ["lastname", "Raje"],
//     ["age", 24],
//     ["role", "JSWizard"],
//   ],
//   [
//     ["firstname", "Sri"],
//     ["lastname", "Devi"],
//     ["age", 28],
//     ["role", "Coder"],
//   ],
// ];
// var final = [];

// while (array.length != 0) {
//   var outer_remove = array.shift();
//   var new_object = {};
//   while (outer_remove.length != 0) {
//     var inner_remove = outer_remove.shift();
//     var key = inner_remove[0];
//     var value = inner_remove[1];
//     new_object[key] = value;
//   }
//   final.push(new_object);
// }

// console.log(final);

// var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let sumodd = number.reduce((acc, currentValue) => {
//   acc += currentValue;
//   console.log(acc);
//   return acc; // add this line to return the updated accumulator
// }, 0); // add initial value of 0 for the accumulator

// console.log(sumodd);

// var as = [12, 34, 5, 6, 2, 56, 6, 2, 1];
// var s = as.reduce(function (a, c) {
//   if (c % 2 != 0) {
//     return a + c;
//   }
//   return a;
// },0);
// console.log(s);

// aa = (data) => {
//     var result = "";
//     for (i = 0; i < data.length - 1; i += 2) {
//       var currentChar = data[i];      // currentChar stores the current character
//       var nextChar = data[i+1];       // nextChar stores the next character
//       result += nextChar + currentChar;   // concatenate nextChar and currentChar together and append to result
//     }
//     if (data.length % 2 == 1) {
//       result += data[data.length - 1];   // if the length of data is odd, append the last character to result
//     }
//     console.log(result);
//   };
//   aa("1234");
  