const longestBeutifulSubString = (word) => {
    let count =1 
    let length = 1
    let ans = 0
    for(let i=0; i<word.length; i++){
        if(word[i-1] <= word[i]){
            length++
            if(word[i-1] != word[i]){
                count++
            }
        }else{
            count =1
            length =1
        }
        if(count === 5){
            ans = Math.max(ans , length)
        }
    }
    console.log(ans)
    return ans
}   

longestBeutifulSubString('aeiaaioaaaaeiiiiouuuooaauuaeiu')