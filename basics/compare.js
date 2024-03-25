console.log(2 > 1)
console.log(2 >= 1);

console.log("2" > 1)
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);     // equality operator does not convert null to 0
console.log(null >= 0);    // comparison operators convert null to 0

//===   strict check with data type

console.log("2" == 2);
console.log("2" === 2);