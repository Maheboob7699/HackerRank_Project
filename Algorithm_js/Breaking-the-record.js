function breakingRecords(scores) {
    let minvalue=scores[0];
    let maxvalue=scores[0];
    let max_count=0;
    let min_count=0;
    
    for(let i=0; i<scores.length; i++){
      if(scores[i]>maxvalue)
      {
          max_count++;
          maxvalue=scores[i];
      }  
      
      else if(scores[i]<minvalue)
      {
          min_count++;
          minvalue=scores[i];
      }  
        
        
    }
    return [max_count,min_count];

}