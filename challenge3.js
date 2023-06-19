let marks = prompt("Enter the student's marks (between 0 and 100):");
marks = parseFloat(marks);
if (isNaN(marks) || marks < 0 || marks > 100) {
  console.log("Invalid input. Please enter a number between 0 and 100.");
} else {
  var grade;
  if (marks > 79) {
    grade = 'A';
  } else if (marks >= 60 && marks <= 79) {
    grade = 'B';
  } else if (marks >= 50 && marks <= 59) {
    grade = 'C';
  } else if (marks >= 40 && marks <= 49) {
    grade = 'D';
  } else {
    grade = 'E';
  }
  console.log("Grade: " + grade);
}