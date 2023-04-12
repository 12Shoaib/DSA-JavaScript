const reverse = (arr) => {
    let res = []
    for(let i=arr.length-1;i>=0;i--){
        res.push(arr[i])
    }
    console.log(res)
}

reverse([1,2,3,4,5])
