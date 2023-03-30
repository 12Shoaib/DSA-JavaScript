const productOfArray = (arr) => {
    if(arr.length ===0 ) return 1
    
    let num = arr[0]
    arr.shift()
    return num * productOfArray(arr)
}


console.log(productOfArray([1,2,3,4,5]))

//Another Method

const proArr = (arr, i) => {
    if(i=== arr.length) return 1

    return arr[i]*proArr(arr , i+1)
}
console.log(proArr([1,2,3,4,5],0))