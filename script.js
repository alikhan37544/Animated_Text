const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";

let interval = null;

function startAnimation() {
  const inputText = document.getElementById("textInput").value.toUpperCase();
  const h1 = document.getElementById("inputText");
  
  h1.dataset.value = inputText;
  h1.innerText = inputText;
  
  let iteration = 0;
  clearInterval(interval);
  
  interval = setInterval(() => {
    h1.innerText = inputText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return inputText[index];
        }
        
        if (inputText[index] === " ") {
          return " ";
        }
        
        return letters[Math.floor(Math.random() * letters.length)];
      })
      .join("");
    
    if (iteration >= inputText.length) {
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);
}

document.getElementById("inputText").onmouseover = startAnimation;
