function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let apple_point=0;
    let orange_point=0;
 for(let i=0; i<apples.length; i++)
 {
     let dis1=apples[i]+a;
     if(dis1>=s && dis1<=t)
     {
         apple_point++;
     }
     
 }
 for(let j=0; j<oranges.length; j++)
 {
     let dis2=oranges[j]+b;
     if(dis2>=s && dis2<=t)
     {
         orange_point++;
     }
     
 }
console.log(apple_point);
console.log(orange_point);
 
 

}
