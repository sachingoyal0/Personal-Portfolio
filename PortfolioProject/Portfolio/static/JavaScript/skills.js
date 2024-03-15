window.addEventListener("load", function () {
  animateProgressBar("Html-progress", 90); // Web Development skill, 80% complete
  animateProgressBar("css-progress", 70); // css skill, 70% complete
  animateProgressBar("JavaScript-progress", 60); // JavaScript skill, 60% complete
  // Add more skills and progress values as needed
  animateProgressBar("Bootstrap-progress", 60); // Bootstrap skill, 60% complete
  animateProgressBar("Python-progress", 75); // Python skill, 60% complete
  animateProgressBar("Django-progress", 75); // Django skill, 75% complete
  animateProgressBar("Numpy-progress", 30); // Numpy skill, 30% complete
  animateProgressBar("Pandas-progress", 30); // Pandas skill, 30% complete
  animateProgressBar("Matplotlib-progress", 30); // Matplotlib skill, 30% complete
  animateProgressBar("Mysql-progress", 75); // Mysql skill, 75% complete
  animateProgressBar("React-progress", 50); //  skill, 10% complete
});

function animateProgressBar(elementId, targetWidth) {
  const bar = document.getElementById(elementId);
  let width = 0;
  const increment = targetWidth / 100; // Calculate the increment for each frame

  function frame() {
    if (width >= targetWidth) {
      clearInterval(interval);
    } else {
      width += increment;
      bar.style.width = width + "%";
      bar.innerHTML = Math.round(width) + "%"; // Display the percentage
    }
  }

  const interval = setInterval(frame, 10);
}
