//print a prime numbers in the given number
n=5721736
c=0
e=""
m=String(n).split('');
for(i=0;i<m.length;i++){
    for(j=2;j<m[i];j++){
        if(m[i]%j==0){
            c++
        }
    }
    if(c==0){
        e=e+m[i]+" "
    }
}
console.log(e)