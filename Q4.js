// Question
/* Q4. Implement a function sum() in the following way such that it gives the sum of two numbers */

//Solution
function add(x){
    return function (y){
        return x+y;
    }
}

//This can also be implemented by using arrow function
const add = x => y => x+y;

/* EXAMPLE */
console.log(sum(5)(7))      //output:12