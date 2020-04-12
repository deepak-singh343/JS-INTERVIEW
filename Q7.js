// Question
/* Q7.Give a relevant example of Promises */

//Solution

var promise = new Promise(function(resolve, reject) { 
    const a = "CodingNinjas"; 
    const b = "CodingNinjas"
    if(a === b) { 
      resolve(); 
    } else { 
      reject(); 
    } 
  }); 
    
  promise. 
      then(function () { 
          console.log('Success, You are a Coding Ninjas student');   //executed if promise is resolved and a result is received.
      }). 
      catch(function () { 
          console.log('Some error has occured');   //executed if promise is rejected and an error is received.
      }); 