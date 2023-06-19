
let score = prompt("Enter the score: ");
score = Number(score);
let grade;
if (score >= 80) {
grade = "A";
} else if (score >= 60 && score <= 79) {
grade = "B";
} else if (score >= 50 && score <= 59) {
grade = "C";
} else if (score >= 40 && score <= 49) {
grade = "D";
} else {
grade = "E";
}

console.log(`The grade is ${grade}.`);

