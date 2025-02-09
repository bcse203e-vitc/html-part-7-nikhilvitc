function calculate() {
  let num1 = parseFloat(document.getElementById('num1').value);
  let num2 = parseFloat(document.getElementById('num2').value);
  let operation = document.getElementById('operation').value;
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById('result').innerText = "Please enter valid numbers.";
    return;
  }

  switch (operation) {
    case 'add':
      result = num1 + num2;
      break;
    case 'subtract':
      result = num1 - num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    case 'divide':
      if (num2 === 0) {
        result = "Error: Division by zero.";
      } else {
        result = num1 / num2;
      }
      break;
    case 'modulus':
      result = num1 % num2;
      break;
    case 'exponentiate':
      result = Math.pow(num1, num2);
      break;
    default:
      result = "Invalid operation.";
  }

  document.getElementById('result').innerText = "Result: " + result;
}
