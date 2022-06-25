function sum(i,n){
    if (i<=n){
        return i+sum(i+1,n)
    }
    return 0
}
console.log(sum(5,10));
// Print sum of all the numbers in the given range.