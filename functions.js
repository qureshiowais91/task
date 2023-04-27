// 1 Print odd numbers in an array

(function () {
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var oddArr = numbers.filter((number) => {
    return number % 2 != 0;
  });

  console.log(oddArr);
})();

// 2 Convert all the strings to title caps in a string array

(function () {
  var str = "i am a student. and this is my school.";
  console.log(toTitleCase(str));
})();

function toTitleCase(str) {
  var reg =
    /(?<=\s|^)(?!(a|is|am|an|and|as|at|but|by|for|in|nor|of|on|or|per|the|to|via)\b)[a-z]/g;
  return str.replace(
    reg,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
}

// 3 Sum of all numbers in an array

(function () {
  var numbers = [1, 2, 3, 4, 5];
  var total = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });

  console.log(total);
})();

// 4 Return all the prime numbers in an array
(function () {
  // 5 are prime (7, 19, 23, 31)
  const numbers = [
    2, 3, 6, 7, 11, 12, 13, 17, 19, 21, 23, 24, 29, 31, 37, 38, 41, 43, 47, 53,
  ];

  function toCheckPrimeNonPrimeNumber(number) {
    if (number < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i == 0) {
        return false;
      }
    }
    return true;
  }
  console.log(
    numbers.filter((number) => {
      return toCheckPrimeNonPrimeNumber(number);
    })
  );
  // console.log();
})();

// 5 Return all the palindromes in an array
(function () {
  var words = ["caBac", "BanaB", "test", "NasaN", "check"];
  console.log(
    words.filter((word) => {
      return word.toLowerCase() === word.toLowerCase().split("").reverse().join("");
    })
  );
})();

// 6 Return median of two sorted arrays of the same size.
(function () {
  const arr_1 = [1, 3, 5, 7, 9];
  const arr_2 = [2, 4, 6, 8, 10, 12];

  const merged_arr = arr_1.concat(...arr_2);
  const sorted = merged_arr.sort((a, b) => a - b);
  console.log(merged_arr);
  if (sorted.length % 2 == 0) {
    const mediumIndex = sorted.length / 2 + 1;
    console.log(sorted[mediumIndex]);
  } else {
    const index_1 = parseInt(sorted.length / 2) - 1;
    const index_2 = parseInt(sorted.length / 2);

    console.log((sorted[index_1] + sorted[index_2]) / 2);
  }
})();

// 7  Remove duplicates from an array
(function () {
  let arr = [1, 2, 3, 3, 4, 4, 5];
  let uniqueArr = arr.reduce(function (unique, item) {
    if (unique.includes(item)) {
      return unique;
    } else {
      return [...unique, item];
    }
  }, []);
  console.log(uniqueArr); // [1, 2, 3, 4, 5]
})();

// 8  Rotate an array by k times

(function(){
  function rotateArray(arr, k) {
    const n = arr.length;
    const rotations = k % n;
    if (rotations === 0) {
      return arr;
    }
    const rotatedArr = [];
    for (let i = n - rotations; i < n; i++) {
      rotatedArr.push(arr[i]);
    }
    for (let i = 0; i < n - rotations; i++) {
      rotatedArr.push(arr[i]);
    }
    return rotatedArr;
  }
  
  const arr = [1, 2, 3, 4, 5];
  const k = 1;
  const rotatedArr = rotateArray(arr, k);
  console.log(rotatedArr);
  
})();


// _____________________________________
// here are the arrow function versions of the given programs:

// Print odd numbers in an array
(() => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const oddArr = numbers.filter(number => number % 2 !== 0);
  console.log(oddArr);
})();

// Convert all the strings to title caps in a string array

(() => {
  const str = "i am a student. and this is my school.";
  const toTitleCase = str =>
    str.replace(
      /(?<=\s|^)(?!(a|is|am|an|and|as|at|but|by|for|in|nor|of|on|or|per|the|to|via)\b)[a-z]/g,
      txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
  console.log(toTitleCase(str));
})();

//Sum of all numbers in an array

(() => {
  const numbers = [1, 2, 3, 4, 5];
  const total = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
  console.log(total);
})();

// Return all the prime numbers in an array
(() => {

  // 5 are prime (7, 19, 23, 31)
  const numbers = [
    2, 3, 6, 7, 11, 12, 13, 17, 19, 21, 23, 24, 29, 31, 37, 38, 41, 43, 47, 53,
  ];

  const toCheckPrimeNonPrimeNumber = number => {
    if (number < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i == 0) {
        return false;
      }
    }
    return true;
  };

  console.log(numbers.filter(number => toCheckPrimeNonPrimeNumber(number)));
})();

//Return all the palindromes in an array
 (() => {
  const words = ["caBac", "BanaB", "test", "NasaN", "check"];
  console.log(words.filter(word => word.split("").reverse().join("").toLowerCase() === word.toLowerCase()));
})();