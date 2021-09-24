function total(arr: number[]): number {
    let summ = 0;
    arr.forEach(element => {
        summ += element;
    });
    return summ;
}

console.log(total([1, 2, 3])); // 6