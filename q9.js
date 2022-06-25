function sum(i,n){
    if (i<=n){
        if(i%2==0){
            return i+sum(i+1,n)
        }
        return sum(i+1,n)
    }
    return 0
}
console.log(sum(1,10));