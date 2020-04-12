// Question
/* Q6. Explain the concept of prototypes in JS. How is it related to Classes in ES6 */

//Solution
<p>The prototype is an object that is associated with every functions and objects by default 
    in JavaScript, where function's prototype property is accessible and modifiable and object's
     prototype property is not visible.The prototype object is special type of enumerable object 
     to which additional properties can be attached to it which will be shared across all the 
     instances of it's constructor function.The prototype object is being used by JavaScript engine
      in two things, 
      1) to find properties and methods of an object 
      2) to implement inheritance in JavaScript.
</p>

//Example
function Person(name, job, yearOfBirth){   
    this.name= name; 
    this.job= job; 
    this.yearOfBirth= yearOfBirth; 
} 
// adding calculateAge() method to the Prototype property 
Person.prototype.calculateAge= function(){  
    console.log('The current age is: '+(2020- this.yearOfBirth)); 
} 
console.log(Person.prototype); 
  
// creating Object Person1 
let Person1= new Person('Deepak', 'Web Developer', 1994);  
console.log(Person1);
Person1.calculateAge(); 

/*Output
{calculateAge:f,constructor:f}
Person{name:"Deepak",job:"Web Developer",yearOfBirth:1994}
The current age is: 26
*/
