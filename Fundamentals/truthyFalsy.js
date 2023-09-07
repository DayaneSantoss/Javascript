// Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean('Jonas')); //true
console.log(Boolean({})); //true
console.log(Boolean('')); //false

const money = 100;
if (money) { //true
  console.log("Don't spend it all ;)"); // <-
} else {
  console.log('You should get a job!');
}

let height; //undefined - false
if (height) { 
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED'); // <-
}
