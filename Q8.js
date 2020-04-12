// Question
/* Why do we need Async/Await.Explain a little about how and why we reached here,with relevant examples */

//Solution

<p> An asynchronous function is a function which operates asynchronously via the event loop,
   using an implicit Promise to return its result.An async function can contain an await 
   expression that pauses the execution of the async function and waits for the passed 
   Promise's resolution, and then resumes the async function's execution and returns the 
   resolved value.The await keyword is only valid inside async functions.Async Await makes 
   it much more easier to use promises.</p>


//Example

const getData = async() => { 
    var y = await "Hello World"; 
    console.log(y); 
} 
  
console.log(1); 
getData(); 
console.log(2); 
//Output: 1 
//        2
//        Hello World