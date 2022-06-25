function pro(i,n){
    if (i<=n){
        return i*pro(i+1,n)
    }
    return 1
}
console.log(pro(1,10));