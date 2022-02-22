const secondHighest = (str) => {
    d = Array.from(
        new Set (
            str
                .split("")
                .map(Number)
                .filter(Number.isInteger)
                .sort((a, b) => b - a)
        )
    )
    return d[1] ?? - 1; 
    /*The nullish coalescing operator(??) simply returns the 
    expression on the right-side of the mark when the 
    expression on the left side is null or undefined. */
}

console.log(secondHighest("dfa12321afd"))