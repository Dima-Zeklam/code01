'use strict';
let list = [100,20,33,45,44,37,10,2,3,5,15,12,31,32,88,94,62,63,77,66,27,1,7,8,9];

let even = [];
let  odd = [];
let index1 , index2 ; 
function evenNum(arr) {
    index1 = 0;
    index2 = 0;
for(let i=0;i<arr.length;i++){

    if(arr[i]%2==0){
        even[index1]=arr[i];
        index1++;
    } else {
       
        odd[index2]=arr[i];
        index2++;
       
    }

}
     return ( [even, odd ] );
}

console.log('The even number is: ' + evenNum(list)[0]);
console.log('The odd numbers is: ' + evenNum(list)[1]);
console.log('The numbers of even number is: ' + even.length );
console.log('The numbers of odd number is: ' + odd.length );

document.write('The even number is: ' + evenNum(list)[0] + "<br><hr>" );
document.write('The odd numbers is: ' + evenNum(list)[1] + "<br><hr>");
document.write('The numbers of even number is: ' + even.length + "<br><hr>");
document.write('The numbers of odd number is: ' + odd.length );
