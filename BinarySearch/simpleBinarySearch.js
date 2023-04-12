const binarySearch = (arr,target) => {
    let left = 0;
    let right = arr.length-1
    let answer = -1
    while(left<=right){
        var mid = Math.round((left+right)/2)
        if(target== arr[mid]){
            answer = mid
            break
        }   
        else if(target > arr[mid]  ){
            left = mid+1
        }
        else{
            right=mid-1
        }
    }

    if(answer != -1){
        console.log(target, 'is present at index' , answer)
    }else{
        console.log(target, 'is not present')
    }

}
binarySearch([1,2,3,4,5,6] , 6)

// console.log(binarySearch([1,2,3,4,5,6] , 5))