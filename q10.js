function f(a,n){
    if(n!=0){
        return a*f(a,n-1)
    }
    return 1
}
console.log(f(2,5))