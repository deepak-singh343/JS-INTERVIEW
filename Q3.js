// Question
/* Q3. Implement a function strContains(char) that I can use on any string and 
       it returns true/false if the character “char” is present on a string. */


//Solution
String.prototype.strContains = function(ch){
    const str = this;
    // iterate the String str if character 'ch' exists in that string then return true else return false.
    for(let i=0; i<str.length; i++){
        if(str.charAt(i) === ch){
            return true;
        }
    }
    return false;
}

/* EXAMPLE */
const str = "Go Corona";

console.log(str.strContains('o'));    //Output:true