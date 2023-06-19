let speed = prompt("Enter the car's speed:")
speed = parseFloat(speed);
demeritPoints = 0;

if (speed < 70) {
    console.log("Ok");
}else {
    demeritPoints = Math.floor((speed - 70) / 5);
    if (demeritPoints > 12) {
        console.log("License suspended");
      } else {
        console.log("Points: " + demeritPoints);
      }
    }