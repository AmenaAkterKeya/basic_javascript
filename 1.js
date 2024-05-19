function Grade() {
  const input = prompt("Enter a number :");

  const grade = parseInt(input);

  let letterGrade;
  if (grade <= 100 && grade >= 80) {
    letterGrade = "A+";
  } else if (grade <= 79 && grade >= 70) {
    letterGrade = "A";
  } else if (grade <= 69 && grade >= 60) {
    letterGrade = "A-";
  } else if (grade <= 59 && grade >= 50) {
    letterGrade = "B";
  } else if (grade <= 49 && grade >= 40) {
    letterGrade = "C";
  } else if (grade <= 39 && grade >= 33) {
    letterGrade = "C";
  } else {
    letterGrade = "F";
  }

  console.log(`Your Result --> ${letterGrade}.`);
}

Grade();
