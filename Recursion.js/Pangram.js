const isPangram = (arr) => {
    if(arr.length<2) return true
    
    if(arr[0] != arr[arr.length-1] ) return false

    return isPangram(arr.slice(1,-1))
}

console.log(isPangram([1,21,1]))