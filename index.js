document.addEventListener("DOMContentLoaded", function () {
  var container = document.querySelector(".container");
  var card = document.querySelector(".card");

  card.addEventListener("click", function () {
    window.location.href = "letter.html";
  });
  container.addEventListener("mouseenter", function () {
    animateCard("-90px");
  });

  container.addEventListener("mouseleave", function () {
    animateCard("0");
  });

  function animateCard(topValue) {
    var startTime = null;
    var duration = 1000; // Duration of the animation in milliseconds

    function step(currentTime) {
      if (!startTime) startTime = currentTime;
      var progress = currentTime - startTime;
      var newPos = easeInOut(progress, 0, parseInt(topValue), duration);
      card.style.top = newPos + "px";
      if (progress < duration) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }

  // Easing function (you can use a library for more complex easing)
  function easeInOut(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }
});
