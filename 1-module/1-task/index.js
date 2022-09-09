function factorial(n) {
    let total = 1;
    if (n === 0 || n === 1)
        return 1;
    for(let i = 2; i <= n; i++)
        total *= i;
        return total;
}
