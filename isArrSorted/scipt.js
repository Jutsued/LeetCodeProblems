const check = (nums) => {
    var decreaseFlag = false;
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] < nums[i - 1]){
            if(!decreaseFlag) decreaseFlag = true
            else return false
        }
    }
    return !decreaseFlag || nums[nums.length - 1] <= nums[0]
}

console.log(check([3,2,1,5]))