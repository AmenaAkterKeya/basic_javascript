function checkEventOdd() {
  const input = prompt("Enter the number : ");
  const number = parseInt(input);
  if (number % 2 == 0) {
    console.log(`${number} is even`);
  } else {
    console.log(`${number} is odd`);
  }
}
checkEventOdd();
