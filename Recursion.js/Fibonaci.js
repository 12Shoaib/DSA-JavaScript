const Fibonaci = (num) => {
    if(num === 1 || num === 0) return num 
    
    const fib = Fibonaci(num-1) + Fibonaci(num-2)
    return fib
}

console.log(Fibonaci(5))