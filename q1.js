function range(a,b){
    if(a<=b){
        console.log(a)
        return range(a+1,b)
    }
}
range(1,10)