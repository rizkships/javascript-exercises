const fibonacci = function(count) {
if (count < 0) return "OOPS";
if (count === 0) return 0;

let prevNum = 1
let nextNum = 0 

for (let i = 2; i <= count; i++ ) {
   let currentNum = prevNum + nextNum; 
    nextNum = prevNum;
    prevNum = currentNum;
}
return prevNum
}

// Do not edit below this line
module.exports = fibonacci;
