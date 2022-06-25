function fib(a,b,i,j){
    if(i<=j){
        console.log(a);
        c=a+b 
        return fib(b,c,i+1,j)
    }
}
fib(1,1,1,10)