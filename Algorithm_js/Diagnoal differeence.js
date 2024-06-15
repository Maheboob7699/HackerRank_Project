function diagonalDifference(arr) {
    // Write your code here
    let n = arr.length;
    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
    
    for (let i = 0; i < n; i++) {
        primaryDiagonalSum += arr[i][i];
        secondaryDiagonalSum += arr[i][n - i - 1];
       
    }
    
    return Math.abs(primaryDiagonalSum - secondaryDiagonalSum);

}