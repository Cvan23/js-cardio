// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
    // USING 'MODULOUS OPERATOR'
    function koaBear() {
      for ( let i = 1; i <= 100; i++) {
         if(i % 3 === 0 && i % 5 === 0) {
            console.log('KoaBear')
          } else if(i % 3 === 0) {
            console.log('Koa')
          } else if(i % 5 === 0) {
            console.log('Bear');
          }  else {
            console.log(i);
          }
        }
     }
    
    
    
    // Call Function
    const output = koaBear();
    
    console.log(output);