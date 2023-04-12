const recusrionBinary = (arr,l,r,target) => {
    let n= arr.length

    //base case
    if(l>r){
        console.log(target, 'is not present in the array')
        return 
    }

    let mid = Math.round((l+r)/2)
    if(target == arr[mid]){
        console.log(target, 'is present at index' , mid)
        return 
    }
    else if(target > arr[mid]){
        recusrionBinary(arr,mid+1,r,target)
    }else{
        recusrionBinary(arr,l,mid-1,target)
    }
}
recusrionBinary([1,2,3,4,5],0,4,5)