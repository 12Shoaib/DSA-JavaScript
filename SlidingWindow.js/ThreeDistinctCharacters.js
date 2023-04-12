const ThreeDistinctCharacters = (arr) => {
    let reult = 0
    for(let i=0; i<arr.length-2; i++){
        let a = arr[i]
        let b= arr[i+1]
        let c= arr[i+2]
        if(a!=b&&b!=c&&c!=a){
            reult++
        }
    }
    console.log(reult)
    return reult
}
ThreeDistinctCharacters('xyzzaz')