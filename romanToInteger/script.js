const romanToInteger = (str) => {
    const values = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let res = 0;

    str.split('').forEach((num, i) => {
        if(values[num] < values[str[i + 1]]) res -= values[num];
        else res += values[num];
    })
    return res;
}

console.log(romanToInteger("MCMXCIV"));