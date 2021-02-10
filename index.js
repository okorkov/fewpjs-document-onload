document.addEventListener("DOMContentLoaded", function() {
  element = document.getElementById('text');
  element.textContent = "This is really cool!"
});


console.log(
  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
); 