// Question
/* Q1. Implement customMap() function for JS arrays. 
       The functionality should be exactly the same as that of JS native .map() function. 
       Function customMap() should return a new array and not change the array on which we are mapping */

//Solution
Array.prototype.customMap = function(callback) {
    //"this" refers to an array on which we are calling "customMap" function
    const currentArray=this;
    const resultArray = [];
    for (let index = 0; index < this.length; index++) {
        resultArray.push(callback(currentArray[index], index));
    }
    //output the result to a new array and return it.
    return resultArray;
}

// EXAMPLE

// INPUT ARRAY
const array = [1, 5, 7];

const doubles = array.customMap((value, index)=>{
    return value * 2;
})

console.log(array);  //Output:[1,5,7]

console.log(doubles);  //Output:[2,10,14]