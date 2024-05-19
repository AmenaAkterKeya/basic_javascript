const num = [
  1, 3, 2, 4, 5, 15, 6, 7, 11, 8, 9, 10, 17, 19, 12, 13, 20, 14, 16, 18,
];
const numbers = num.sort(function (a, b) {
  return a - b;
});
console.log(numbers);
