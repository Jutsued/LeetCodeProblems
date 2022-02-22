const isPalindrome = (str) => {
    let reversed = str
            .toString()
            .split('')
            .reverse()
            .join('')
    return (str.toString() === reversed);
}

console.log(isPalindrome('edde'))