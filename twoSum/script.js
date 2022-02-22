const twoSum = (nums, target) => {
    let numbers = [];
    let cache = [];
    for(let i = 0; i < nums.length; i++) {
        for(j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target) {
                if(cache.includes(numbers[i] && cache.includes(numbers[j]))){
                    cache.push(numbers[i])
                    numbers.push(i, j);
                }
                numbers.push(i, j);
                cache.push(numbers[i])
            }
        }
    }
    return numbers
}

console.log(twoSum([2,7,11,15], 9))