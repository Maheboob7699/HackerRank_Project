function birthdayCakeCandles(candles) {
    let value=Math.max(...candles)
    let candleCount=0;
    for(let i=0; i<candles.length; i++)
    {
        if(candles[i]== value)
        {
            candleCount++;
        }
    }
  return candleCount
  }