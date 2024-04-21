// let str = "Shambhu";
// let output = "";
// for(let i=0;i<str.length;i++){
//     if(!output.includes(str[i])){
//         output = output +str[i];
//         console.log("message", output);
//     }
// }
// console.log("message 2", output);

//unique arr
// let arr = [1,4,5,34,54,5,4,5,4];
// let output = [];
// for(let i=0;i<arr.length;i++){
//     if(output.indexOf(arr[i])=== -1){
//         output.push(arr[i])
//     }
// }
// console.log(output);


//missing value in array
// let arr = [1,0,3,5,6,7,4,3,4,5,6,7,76];
// let minValue = arr[0];
// let maxValue = arr[0];
// let missingValue = [];
// for(let i=0;i<arr.length;i++){
//     if(minValue> arr[i]){
//         minValue = arr[i]
//     }
// }
// console.log(minValue);
// for(let i =0;i<arr.length;i++){
//     if(maxValue<arr[i]){
//         maxValue = arr[i]
//     }
// }
// console.log(maxValue);

// for(let i=minValue;i<maxValue;i++){
//     if(arr.indexOf(i)<0){
//         missingValue.push(i)
//     }
// }
// console.log("missing no", missingValue);


//hoisting
//clouser 
//callback function
//promise


// let datas = [
//     {name: "Shambhu", phone: 988799798,age:32},
//     {name: "Mayank", phone: 988799799,age:34},
//     {name: "Varun", phone: 988799790,age:34},
// ]
// function getData(){
//     setTimeout(()=> {
//         datas.forEach((ele)=> {
//             console.log(ele.name);
//         })
//     },1000)
// }
// function createData(newObject, callback){
//     setTimeout(()=> {
//         datas.push(newObject)
//         callback()
//     },2000)
// }
// createData({name: "Vikash", phone: 67867868,age:35},getData)
// getData()

// function traverse(arr,n) {
//     console.log("original value: ", arr);
//     for(let i = 1; i <= 3; i++) {
//         let lastele = arr.pop();
//         let shiftele = arr.unshift(lastele);
//         console.log(i,"st result: ", arr);
//     }
// }
// let arr = [2,3,4,5,6];
// let n = 3;
// traverse(arr,n);

// let str = "helloindia";
// console.log(str,' ', str.split('').sort().join(''));

// let arr = ['aaa','bbb','ccc','aaa', 'bbb','aaa','aaa','aaa','aaa'];
// let obj = {};
// for(let i=0; i<arr.length; i++) {
//     let list = arr[i];
//     console.log("result: ", list, obj);
//     if(obj[list]) {
//         obj[list] = obj[list] + 1;
//     }
//     else {
//         obj[list] = 1;
//     }
// }
// console.log("occurence: ", obj);

// reverse string
// function reverseString(str) {
//     return str.split('').reverse().join('');
// }
// console.log(reverseString('Hello'));

// longest word in sentence
// function findlongword(str) {
//     const sentence = str.split(' ');
//     let longestword = '';
//     for(let i=0;i<sentence.length;i++) {
//         if(sentence[i].length > longestword.length) {
//             longestword = sentence[i];
//         }
//     }
//     return longestword;
// }
// console.log(findlongword('india is great economy in the world'));

// remove duplicate element from array
// function removeDuplicate(arr) {
//     return [...new Set(arr)];
// }
// console.log(removeDuplicate([1,22,33,5,1,9,5,4]));

//find missing number in array
// function findmissingno(arr) {
//     const n = arr.length + 1;
//     const sum = (n*(n+1))/2;
//     console.log('abc', n, sum);
//     const arrSum = arr.reduce((acc, curr) => acc + curr, 0);
//     console.log('new1', arrSum);
//     // return sum-arrSum;
// }
// console.log(findmissingno([1,2,3,5]));

//simple code of above code
// function missingele(arr) {
//     const arrlength=arr.length;
//     var sum=0;
//     for(let i=0;i<arr.length;i++){
//         sum= sum+arr[i];
//     }
//     console.log('array sum', sum);
//     var logic = arrlength + sum;
//     console.log('logic', logic);
//     var missingelement = logic - sum;
//     console.log("missing element of array ", missingelement);
// }
// console.log(missingele([1,2,3,5]));

// -- missing  multiple no. find in given array //
// function missingele(ele) {
//   let min = Math.min(...ele);
//   let max = Math.max(...ele);
//   let newarr = [];
//   for(let i=min;i<=max;i++) {
//     if(!ele.includes(i)) {
//       newarr.push(i);
//     }
//   }
//   console.log('missing element array is: ', newarr);
//   console.log('missing element ', ...newarr);
// }
// let ele= [10,11,13,14,17,19,21];
// missingele(ele)

//check palindrome or not // reverse only word 
// function isPalindrome(str) {
//     const reversedStr = str.split('').reverse().join('');
//     return str === reversedStr;
//     //console.log('console', reversedStr);
// }
// console.log(isPalindrome('level'));


// reverse string -- 
// var str = "I LOVE MY COUNTRY";
// console.log(str.split(/\s/).reverse().join(" "));
// output- COUNTRY MY LOVE I

// let a  =  156e5;
// let b =   156e-5;
// console.log(a);
// console.log(b);


// callbacks
// function firstFunction() {
//     // Simulate a code delay
//     setTimeout(function () {
//       console.log("First function called");
//     }, 1000);
//   }
//   function secondFunction() {
//     console.log("Second function called");
//   }
//   firstFunction();
//   secondFunction();
  
//  Output;
  // Second function called
  // First function called

// callback hell
//   async1(function(){
//     async2(function(){
//         async3(function(){
//             async4(function(){
//                 ....
//             });
//         });
//     });
// });

// find longest words in paragraph //
// function findLongestWord(str) 
// {
//   var strSplit = str.split(' ');
//   var longestWord = 0;

//   for(var i=0;i<strSplit.length;i++) {
//     if(strSplit[i].length > longestWord)
//     {
//       longestWord = strSplit[i].length;
//       //console.log("word name", strSplit[i]);
//     }
//   }
//   console.log("logest word", longestWord);
//   return longestWord;
// }
// findLongestWord("the quick brown fox jumped over the lazy dog");


// program to generate fibonacci series up to n terms
// let n1 = 0, n2 = 1, nextTerm;
// let series = [];
// console.log('Fibonacci Series:');
// for (let i = 1; i <= 10; i++) {
//     console.log(n1);
//     //series.push(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }
//console.log(series);


// factorial -> 5!= 5x4x3x2x1 = 120
// let n = 5;
// function factorial(n) { 
//     if (n === 0) { 
//         return 1; 
//     } 
//     else { 
//         return n * factorial( n - 1 ); 
//     } 
// } 
// console.log(factorial(n));

//  Anagrams or not -> silent == listen
// function areAnagrams(str1, str2) {
//   // Remove any non-alphabetic characters and convert to lowercase
//   str1 = str1.replace(/[^A-Za-z]/g, '').toLowerCase();
//   str2 = str2.replace(/[^A-Za-z]/g, '').toLowerCase();

//   // Sort the characters and compare the strings
//   return str1.split('').sort().join('') === str2.split('').sort().join('');
// }

// // Example usage
// console.log(areAnagrams('listen', 'silent')); // true
// console.log(areAnagrams('hello', 'world')); // false


// print 10 fibonacci no. using recursion.
// sort a dictionary
// CI-CD
// virtual dom and real dom
// module bundler
// react fragments - replacement of div
// stateful and stateless components
// Heigher order component - reusablity new component with transparent as output
// data flows in react- unidirectict(parent to child), callback

// props drilling // A to b, b to c, c to d// contex api //contex hook // redux
// child props
// life cycle hooks
// functional component vs class component
// useeffect(when rendering is completed) is sideeffect of api call, use of it
// useRef (uncontrolled component in forms)
// how to implement Lazy loading in react routers with router dom library?
// why we use classname instead of class in react
// error boundary in raect
// why we use super in constructor in react
// how to call api in reactjs // axios(response.object - stringify) and fetch(asyncronous method)(object -stringfy)
// limitation of raectjs // not a frame it is heavy to impment, depend on third party packge like- axios
// framework-  not depend(everything is inside, flow own rule, legacy application) - angular

// array method- map, reduce , filter, slice, splice, push, pop
// map method- 
// find method- 
// callback function-
// asynchronous function- independent of other execution process //settimeout
// spread opeartor- merge two array
// parent to child-> props -> props.child
// controlled and uncontrolled component
// custom hooks -> function use
// usecallback(memorize function) -> it is smiliar usememo (memorize data)
// redux - global state management purpose, use larger project there is store
// main three component in redux- action, store, reducer
// how do we perform action in functional component- use dispatch hook can dispatch the functional component
// how do access store data in component - we can use selector we can do like we can access this store data from the use selector


