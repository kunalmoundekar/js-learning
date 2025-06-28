let arr1 = [1, 2, 3, 4, 5, 6]

let newArr1 = arr1.map((i, e) => {
    return (`${e}:${i}`)
})

console.log(newArr1)


let evens = arr1.filter((value) => {
    return value % 2 === 0;
});
console.log(evens); 



let sum = arr1.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum); // 21

