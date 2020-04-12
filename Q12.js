// Question
/* Q12. Implement Queue class in JS. */

//Solution
// Queue class 
class Queue 
{ 
    // Array is used to implement a Queue 
    constructor() 
    { 
        this.items = []; 
    } 
    // enqueue function 
    enqueue(element) 
    {     
        // adding element to the queue 
        this.items.push(element); 
    } 

    dequeue() 
    { 
        // removing element from the queue 
        // returns underflow when called  
        // on empty queue 
        if(this.isEmpty()) 
            return "Underflow"; 
        return this.items.shift(); 
    } 

    // front function 
    front() 
    { 
        // returns the Front element of  
        // the queue without removing it. 
        if(this.isEmpty()) 
            return "No elements in Queue"; 
        return this.items[0]; 
    } 

    // isEmpty function 
    isEmpty() 
    { 
        // return true if the queue is empty. 
        return this.items.length == 0; 
    } 

    // printQueue function 
    printQueue() 
    { 
        var str = ""; 
        for(var i = 0; i < this.items.length; i++) 
            str += this.items[i] +" "; 
        return str; 
    } 
} 

//Example
// creating object for queue class 
var queue = new Queue();  

console.log(queue.isEmpty());   // returns true 
  
// Adding elements to the queue 
queue.enqueue(10); 
queue.enqueue(20); 
queue.enqueue(30); 
queue.enqueue(40); 
queue.enqueue(50); 
queue.enqueue(60); 
  
console.log(queue.front());  // returns 10 
   
console.log(queue.dequeue());  // removes 10 from the queue 
  
console.log(queue.front());  // returns 20 
  
console.log(queue.dequeue());  // removes 20 
  
console.log(queue.printQueue());  // prints [30, 40, 50, 60] 