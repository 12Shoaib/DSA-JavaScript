const power =(number , exp) => {
    if(exp === 0) return 1

    return number*power(number , exp-1)
} 

console.log(power(2,2))