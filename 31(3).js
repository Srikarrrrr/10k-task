//reverse a number in the array
a=[213,687,876,987,11,91]
emp=[]
for(i=0;i<a.length;i++){
    ar=String(a[i]).split("")
    b=ar.reverse().join("")
    emp.push(Number(b))
}
console.log(emp)
//output:[ 312, 786, 678, 789, 11, 19 ]
