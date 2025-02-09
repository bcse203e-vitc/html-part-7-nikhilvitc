function fizzBuzz(customDivisibilityRules) {
  for (let i = 1; i <= 50; i++) {
    let output = '';

    for (let rule of customDivisibilityRules) {
      if (i % rule.divisor === 0) {
        output += rule.message;
      }
    }

    if (output === '') {
      console.log(i);
    } else {
      console.log(output);
    }
  }
}

let customDivisibilityRules = [
  { divisor: 3, message: 'Fizz' },
  { divisor: 5, message: 'Buzz' }
];

fizzBuzz(customDivisibilityRules);
