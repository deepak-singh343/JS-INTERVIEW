// QUESTION 
/* Q5. How to call the function display() in the following code such that it logs the given object on the screen */

function display(){
    console.log(this);
}

const obj = {a: 10};

display.bind(obj)();  //Output:{a:10}   // bind() method allows us to easily set which object will be bound by the this keyword