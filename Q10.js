// Question
/* Q10. Implement LinkedList class in JS. */

//Solution

// User defined class node 
class Node { 
    // constructor 
    constructor(element) 
    { 
        this.element = element; 
        this.next = null
    } 
} 

// linkedlist class 
class LinkedList { 
    constructor() 
    { 
        this.head = null; 
        this.size = 0; 
    } 
    // adds an element at the end of list 
    add(element) 
    { 
        // creates a new node 
        var node = new Node(element); 
    
        // to store current node 
        var current; 
    
        // if list is Empty add the 
        // element and make it head 
        if (this.head == null) 
            this.head = node; 
        else { 
            current = this.head; 
    
            // iterate to the end of the 
            // list 
            while (current.next) { 
                current = current.next; 
            } 
    
            // add node 
            current.next = node; 
        } 
        this.size++; 
    }

    // removes a given element from the list 
    removeElement(element) 
    { 
        var current = this.head; 
        var prev = null; 
    
        // iterate over the list 
        while (current != null) { 
            // comparing element with current 
            // element if found then remove the 
            // and return true 
            if (current.element == = element) { 
                if (prev == null) { 
                    this.head = current.next; 
                } else { 
                    prev.next = current.next; 
                } 
                this.size--; 
                return current.element; 
            } 
            prev = current; 
            current = current.next; 
        } 
        return -1; 
    } 

    // checks the list for empty 
    isEmpty() 
    { 
        return this.size == 0; 
    } 

    // gives the size of the list 
    size_of_list() 
    { 
        console.log(this.size); 
    } 

    // prints the list items 
    printList() 
    { 
        var curr = this.head; 
        var str = ""; 
        while (curr) { 
            str += curr.element + " "; 
            curr = curr.next; 
        } 
        console.log(str); 
    } 
}    

//Example
var ll = new LinkedList(); 
  
console.log(ll.isEmpty()); // returns true 
  
// adding elements to the list 
ll.add(10); 
ll.add(20); 
ll.add(30); 
ll.add(40); 
ll.add(50);
  
console.log(ll.size_of_list()); // returns 5
  
ll.printList();  // returns 10 20 30 40 50 
  
console.log("is element removed ?" + ll.removeElement(50));  // prints 50 from the list 
  
ll.printList();  // prints 10 20 30 40 
  
console.log("Index of 40 " + ll.indexOf(40));  // returns 3 
  
