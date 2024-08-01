function checkKey(event) {
    if (event.key === "Enter") {
      checkPalindrome();
    }
  }

  function checkPalindrome() {
    let inputElement = document.querySelector("#js-input").value;
    let reversed = "";

    if (inputElement === "") {
      alert("Please Enter a String");
    } else {
      for (let i = inputElement.length - 1; i >= 0; i--) {
        reversed += inputElement[i];
      }

      if (reversed === inputElement) {
        document.querySelector("#result").innerHTML = "Palindrome";
      } else {
        document.querySelector("#result").innerHTML = "Not Palindrome";
      }
    }
  }