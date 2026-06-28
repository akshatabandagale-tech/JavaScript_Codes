//Write a program to reverse a string in Javascript.

/*psudocode:
1. Convert the string into an array using split() method.
2. Reverse the string using reverse () function.
3.Join the string using join method.*/


//code:

function reverseString(str){
    return str.split("").reverse().join("");

}
console.log(reverseString("Akshata"));
