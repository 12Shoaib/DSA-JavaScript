const TwoSum = (arr , target) => {
    let i =0;
    let j= arr.length-1;
    while(i<j){
        if(arr[i]+arr[j] === target){
            return [i,j]
        }
        else if(arr[i]+arr[j] > target){
            j--
        }else{
            i++
        }
    }
}

console.log(TwoSum([1,2,3,4] , 4))