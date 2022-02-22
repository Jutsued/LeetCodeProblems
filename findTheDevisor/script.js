
const divisors = (integer) => {
    this.inner = prime();
    let holder = [];

    if(prime(integer)) {
        return integer + ' is prime';
    }
        for(let i = 2; i < integer; i++){
            if(integer % i === 0){
                holder.push(i);
            }
        }
        return holder
}

const prime = (integer) => {
    for(let i = 2; i < integer; i++) {
        if(!(integer % i)) {
            return false;

        }
    }
    return true;
}

console.log(divisors(17));