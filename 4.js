function leapYear() {
  const input = prompt("Enter the number : ");
  const year = parseInt(input);
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log(`${year} is leap year`);
  } else {
    console.log(`${year} is not leap year`);
  }
}
leapYear();
