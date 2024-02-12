document.addEventListener("DOMContentLoaded", function () {
  var text =
    "Hi babe, thank you for everything you have done. I'm really glad that I met you. I'm hoping for the time na magkakaroon tayo ng free time and we could spend more time together. Masaya at magaan ang loob ko na makasama ikaw. Praying and hoping for the success natin dalawa. Let's cherish every moment from now on. I dont want to lose you anymore. I will make you proud. Museum date us soon! Advanced Happy Valentines day! 💛 I love you. -kineto";
  var paragraph = text.split("");
  let i = 0;

  console.log("Paragraph array:", paragraph);

  function dashOut(arr) {
    if (i < arr.length) {
      console.log("Current character:", arr[i]);
      document.querySelector(".textCont").textContent += arr[i];
      i++;
      console.log("The i count:", i);
      setTimeout(function () {
        dashOut(arr);
      }, interval(arr[i]));
    }
  }

  function interval(letter) {
    if (letter == ";" || letter == "." || letter == ",") {
      return Math.floor(Math.random() * 500 + 500);
    } else {
      return Math.floor(Math.random() * 130 + 5);
    }
  }

  function startFromBegin() {
    i = 0;
    dashOut(paragraph);
  }

  console.log("Starting animation...");
  startFromBegin();
});
