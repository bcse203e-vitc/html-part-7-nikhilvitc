<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Background Color Changer</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      transition: background-color 0.5s ease;
    }
    .button-container {
      text-align: center;
    }
    button {
      padding: 15px 30px;
      font-size: 16px;
      margin: 10px;
      cursor: pointer;
      border: none;
      border-radius: 5px;
    }
    .red {
      background-color: red;
      color: white;
    }
    .green {
      background-color: green;
      color: white;
    }
    .blue {
      background-color: blue;
      color: white;
    }
    .random {
      background-color: gray;
      color: white;
    }
  </style>
</head>
<body>

  <div class="button-container">
    <button class="red" onclick="changeColor('red')">Red</button>
    <button class="green" onclick="changeColor('green')">Green</button>
    <button class="blue" onclick="changeColor('blue')">Blue</button>
    <button class="random" onclick="changeRandomColor()">Random</button>
  </div>

  <script>
    function changeColor(color) {
      document.body.style.backgroundColor = color;
    }

    function changeRandomColor() {
      const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
      document.body.style.backgroundColor = randomColor;
    }
  </script>

</body>
</html>
