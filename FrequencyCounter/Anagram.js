const Anagram = (s,t) => {
    let frequency1 = {}
    let frequency2 = {}

    if(s.length != t.length){
        console.log('false')
        return false
    }

    for(let element of s){
        frequency1[element] = (frequency1[element] || 0)+1
    }
    for(let element of t){
        frequency2[element] = (frequency2[element] || 0)+1
    }
    for(let key in frequency1){
        if(frequency1[key] != frequency2[key]){
            console.log('false')
            return false
        }
    }
    console.log('true')
    return true
}

Anagram('anagram' , 'nagaram')