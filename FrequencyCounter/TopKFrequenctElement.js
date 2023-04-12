const frequentElement = (arr , k) => {
    let frequency = {}

    for(let element of arr){
        frequency[element] = (frequency[element] || 0)+1
    }
    let array = Object.keys(frequency)
    array.sort((a,b) => frequency[b] - frequency[a])
    array.length = k

    console.log(array)
    return array
}
frequentElement([1,1,1,2,2,3] , 2)