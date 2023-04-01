const DistinctElements = (arr) => {

    let fre ={}
    
    for(let element of arr) {
        fre[element] = (fre[element] || 0) +1
    }

    let res = Object.keys(fre)
    console.log(res)
}

DistinctElements([1,2,1,2,4,3,2,1,1])   