// ***Please note - I've never written in PHP before, so the best I could do in 10 minutes is solve the problem in Javascript

function fizzBang() {
  for ( let i = 1; i <= 50; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBang')
    } else if(i % 3 === 0) {
      console.log('Fizz')
    } else if(i % 5 === 0) {
      console.log('Bang');
    }  else {
      console.log(i);
    }
  }
}

// Call Function
const output = fizzBang();

console.log(output);