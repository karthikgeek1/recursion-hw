function fact(n){
    if (n!=0){
        return n*fact(n-1)
    }
    return 1
}
console.log(fact(5))