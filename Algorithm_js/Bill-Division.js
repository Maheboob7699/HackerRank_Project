function bonAppetit(bill, k, b) {
    let total=0;
    let value=0;
    let exactvalue=0;
    for(let i=0; i<bill.length; i++){
        total=total + bill[i] 
    }
     value=total - bill[k];
        exactvalue=value/2;
        
        if(exactvalue === b){
            console.log("Bon Appetit ");
        }
        else{
            console.log( b - exactvalue);
        }
}