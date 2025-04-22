// and = && , or = ||, not = !,

// && operator
let age: number = 18;
if (age >= 10 && age < 20) {
  console.log("You are an adult.");
}
else {
  console.log("You age is not between 10 or 20.");
}
// or operator

if (age >= 10 || age < 18) {
    console.log("You are an adult.");
  }
  else {
    console.log("You age is not between 10 or 20.");
  }


// not operator
let age1: number = 0;
if(!age1) {
    console.log("truth.");
  }
else {
    console.log("false.");
  }

  let age2: number = -1;
  if(!age2) {
      console.log("truth.");
    }
  else {
      console.log("false.");
    }