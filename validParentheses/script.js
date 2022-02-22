const x = (str) => {
    const pairs = {
        "(": ")",
        "[": "]",
        "{": "}"
    }
    if(str == "") {
        return true
    }
    if(str.length < 2) {
        return false
    }

    let stack = [];
    let arr = str.toString().split("");

    for(let i = 0; i < arr.length; i++) {
        let bracket = arr[i];
        if(pairs[bracket]){
            arr.push(bracket)
        } else {
            let checkBracket = stack.pop();
            if(pairs[checkBracket] != bracket) {
                return false
            }
        }
    } 
    //((
    if(stack.length > 0) {
        return false;
    }
    return true;

};

console.log(x("()[]{}"));