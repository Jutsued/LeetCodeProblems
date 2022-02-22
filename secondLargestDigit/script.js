const secondHighest = (str) => {

    let largestNumber = str[0];
    let secondLargestNumber = str[0];

    for(let i = 0; i < str.length; i++){
        if(str[i] > largestNumber) {
            secondLargestNumber = largestNumber; 
            largestNumber = str[i]
        } else if (str[i] > secondLargestNumber){
            secondLargestNumber = str[i]
        }
    }

    return secondLargestNumber;
}

console.log(secondHighest([1, 2, 3, 11, 22, 14, 14, 5]))