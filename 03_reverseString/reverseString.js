//const reverseString = function(string) {
    //if (string = "") return "";
    // declare a variable that turns component strings into arrays 
    //let words = string.split(" ")
    
    // declare another variable that splits each word in these arrays to characters
    //let char = words.split('')
    //let reverseChar = [];
    // run a loop that pops last character from last array into new array 
    //for (let i = 0, char.length() > 0, i++)  {
        //char.pop()
        //reverseChar += char.pop ;
    //}
    
     //return reverseChar; 
    // ... then add these characters then adds resulting words from arrays to form sentence with space


//};
function reverseString(str){
    let r = "";
    for(let i = str.length-1; i >= 0; i--){
      r += str[i];
    }
    return r;
  }

// Do not edit below this line
module.exports = reverseString;
