/* File: script.js */
document.addEventListener("DOMContentLoaded", () => {
  // Dynamic year for copyright
  document.getElementById("year").textContent = new Date().getFullYear();

  // Hover effect for name
  const name = document.getElementById("name");
  name.addEventListener("mouseenter", () => name.style.color = "#2563eb");
  name.addEventListener("mouseleave", () => name.style.color = "#111827");
});
