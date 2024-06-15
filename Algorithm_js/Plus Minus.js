function plusMinus(arr) {
    var positiveNumber = 0;
var negativeNumber = 0;
var zeroNumber = 0;
   // Write your code here
   for (var i=0; i<arr.length; i++){
       // console.log(arr[i])
       if(arr[i]>0){
           // console.log("Positive")
           positiveNumber++
       }
       else if (arr[i]<0){
           // console.log("Negative")
           negativeNumber++
       }else{
           // console.log("Zero")
           zeroNumber++
       }
   }
   console.log(positiveNumber/arr.length);
   console.log(negativeNumber/arr.length);
   console.log(zeroNumber/arr.length); 
}
