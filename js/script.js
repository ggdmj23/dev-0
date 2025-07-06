document.addEventListener("DOMContentLoaded", () => {
  console.log("Page loaded successfully.");

  // Time-based greeting
  const now = new Date();
  const hour = now.getHours();
  let greeting;

  if (hour < 12) {
    greeting = "Good morning!";
  } else if (hour < 18) {
    greeting = "Good afternoon!";
  } else {
    greeting = "Good evening!";
  }

  // Create and display greeting in main
  const main = document.querySelector("main");
  const greetingEl = document.createElement("p");
  greetingEl.textContent = greeting;
  greetingEl.style.fontStyle = "italic";
  greetingEl.style.marginTop = "1rem";
  greetingEl.style.color = "#ccc";

  main.appendChild(greetingEl);

  // === Dynamic Footer Year ===
  const year = new Date().getFullYear();
  document.querySelector("footer").innerHTML = `&copy; ${year} Airgon. All rights reserved.`;

  // === Theme Switcher ===
  const toggle = document.createElement("div");
  toggle.id = "theme-toggle";
  toggle.title = "Toggle Dark/Light Theme";
  toggle.innerHTML = "🌓";
  document.body.appendChild(toggle);

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
  });

  // === Terminal Typing Animation ===
  const message = "Welcome to LAMPConnect — Your local-first PHP contact app.";
  const target = document.createElement("p");
  target.className = "typing";
  document.querySelector("main").appendChild(target);

  let i = 0;
  function typeWriter() {
    if (i < message.length) {
      target.textContent += message.charAt(i);
      i++;
      setTimeout(typeWriter, 50);
    }
  }
  typeWriter();

  // === Neon Clock ===
  const clock = document.createElement("div");
  clock.id = "neon-clock";
  document.body.appendChild(clock);

  function updateClock() {
    const now = new Date();
    clock.textContent = now.toLocaleTimeString();
  }
  setInterval(updateClock, 1000);
  updateClock();
});
