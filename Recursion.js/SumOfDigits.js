const  sumOfDigits = (num) => {

    if(num === 0) return 0

    return num%10 + sumOfDigits(Math.round(num/10 ))
}

console.log(sumOfDigits(54321))