// //1.Create a function that takes two numbers as arguments and returns their sum.
// function sum(a,b){
//     sum=a+b
//     console.log(sum)
// }
// sum(4,8)

// //2.minutes to secondsd conversion

// function minutestseconds(a){
//     var b=a/60
//     console.log(b)
// }
// minutestseconds(4)

// //how many seconds in minutes

// function secondstominutes(a){
//     var b=a*60
//     console.log(b)
// }
// secondstominutes(4)

// //3.Create a function that takes a number as an argument, increments the number by +1 and returns the result
// function increment(a){
//     a++
//     console.log(a)
// }
// increment(5)

//4.Create a function that takes the age in years and returns the age in days.
// function age(a){
//     if(a%4==0){
//         b=a*366
//     }
//     else{
//         b=a*365
//     }
//     console.log(b,"days")
// }

// age(8)

//5.sniCreate a function that takes voltage and current and returns the calculated power.
// function power(voltage,current){
//     powerr=voltage*current
//     console.log(powerr)
// }
// power(45,54)

//6.Write a function that returns the string "something" joined with a space " " and the given argument a.

// function space(a){
//     var sum=""
//     for(i=0;i<a.length;i++){
//         sum=sum+" "+a[i]
//     }
//     console.log(sum)
//     }
//     space("something")

//7.Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.
// function tenornot(a,b){
//     if((a||b==10)|| (a+b)==10){
//         console.log(true)
//     }
//     else{
//         console.log(false)
//     }
// }
// tenornot(10,4)

//8.Create a function that takes two strings as arguments and returns either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
// function length(a,b){
//     if(a.length==b.length){
//         console.log("true")
//     }
//     else{
//         console.log("false")
//     }
// }
// length("srikar","sairaj")

//9.Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function, use an arrow function.
// var greet=(a)=>{
//     console.log("good morning "+a)
// }
// greet("srikar")

//10.Create a function that takes an array of 10 numbers (between 0 and 9) and returns a string of those numbers formatted as a phone number (e.g. (555) 555-5555).
// function number(a){
//     console.log("("+a[0]+a[1]+a[2]+")"+ " "+a[3]+a[4]+a[5]+"-"+a[6]+a[7]+a[8]+a[9])
    
//    }
//    number("9652540087")

//11.Create a function that returns an array of strings sorted by length in ascending order.
// Example:
// sortByLength(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"]
// function sortarray(a){
//     for(i=0;i<a.length;i++){
//       for(j=i+1;j<a.length;j++){
//         if(a[i].length>a[j].length){
//           temp=a[i]
//           a[i]=a[j]
//           a[j]=temp
//         }
//       }
//     }
//     console.log(a)
//     }
//     sortarray(['a','bb','abc','abcd','kd','ld'])







