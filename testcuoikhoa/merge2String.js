let a="abcd";
let b="123";
let C=[];
let arr=a.split('');
let arr2=b.split('');
console.log(arr);
console.log(arr2);


function merge2String(arr,arr2,C) {
    let c=0;
let a1=0;
let a2=0;
    while (a1<arr.length||a2<arr2.length) {
        C[c++]=arr[a1++];
        C[c++]=arr2[a2++];
    
        
    
    return C;
}
console.log(merge2String(arr,arr2,C));