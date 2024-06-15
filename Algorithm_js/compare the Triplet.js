function compareTriplets(a, b) {

    let Alice_point=0;
    let Bob_point=0;
    
    for(let i=0;i<a.length;i++){
        
        if(a[i] > b[i]){
          Alice_point++;    
        }
        
        
         else if(a[i] < b[i]){
          Bob_point++;   
        } 
    }
    
    
  let result= [Alice_point,Bob_point];
  return result;
    
    }
    
    