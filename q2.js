function des(a,b){
    if(b>=a){
        console.log(b);
        return des(a,b-1)
    }
}des(1,10)