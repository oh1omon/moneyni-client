let arr = [1, 1, 1, 1, 12, 3, 4, 5, 5, 5];

let needed = [
    ...[...new Set(arr)].map((unItem) => arr.filter((item) => item === unItem)),
];
console.log(needed);
