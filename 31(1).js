//given array is sorted or not
var a=[3,7,8,6,5];
for(i=0;i<a.length;i++){
    for(j=i+1;j<a.length;i++){
        if(a[i]<a[j]){
            document.write("true");
        }
        else{
            document.write("false");
        }
    }
}
