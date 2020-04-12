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
Person.prototype.calculateAge= function(){ 
    console.log('The current age is: '+(2019- this.yearOfBirth)); 
} 
console.log(Person.prototype); 

/*Output
{calculateAge:f,constructor:f}
calculateAge:f()
constructor:f Person(name,job,yearOfBirth)
_proto_:Object
*/