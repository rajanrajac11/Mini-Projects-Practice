function getRandomColor() {
    let colorLetters = "0123456789ABCDEF";
    colorCode = "#";
    for (let i = 0; i < 6; i++) {
      colorCode += colorLetters[Math.floor(Math.random() * 16)];
    }
    return colorCode;
  }

  function changeBackground(color) {
    if (color === "") {
      document.body.style.backgroundColor = getRandomColor();
    } else {
      document.body.style.backgroundColor = color;
    }
  }