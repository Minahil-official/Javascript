// same as like if else jut way of writing is different
var day = 0;
switch (day) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day number");
}
// in example of if else we have to write all the conditions and in switch case we just have to write the case and break statement
var day1 = 0;
if (day1 === 0) {
    console.log("Sunday");
}
else if (day1 === 1) {
    console.log("Monday");
}
else if (day1 === 2) {
    console.log("Tuesday");
}
else if (day1 === 3) {
    console.log("Wednesday");
}
else if (day1 === 4) {
    console.log("Thursday");
}
else if (day1 === 5) {
    console.log("Friday");
}
else if (day1 === 6) {
    console.log("Saturday");
}
else {
    console.log("Invalid day number");
}
