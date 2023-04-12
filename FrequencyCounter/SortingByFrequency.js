const Sorting = (str) => {
    const array = Array.from(str).sort()
    let fre = {}
    for(let element of array) {
        fre[element] = (fre[element] ||0) +1
    }
    const printOrder = array.sort((a,b) => fre[b] - fre[a])

    console.log(printOrder)

}
Sorting('cccaaa')