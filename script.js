const pages = document.querySelectorAll('.page');
const officeLayout = document.getElementById("office-layout");
const floorTitle = document.getElementById("office-title");

// Navigation
document.getElementById("start-button").addEventListener("click", () => {
  showPage("floor-page");
});

document.getElementById("back-to-start").addEventListener("click", () => {
  showPage("start-page");
});

document.getElementById("back-to-floor").addEventListener("click", () => {
  showPage("floor-page");
});

// Floor selection
document.querySelectorAll(".floor-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const floor = btn.getAttribute("data-floor");
    floorTitle.textContent = `${floor} Floor`;
    generateOfficeLayout(floor);
    showPage("office-page");
  });
});

// Show/Hide pages
function showPage(pageId) {
  pages.forEach(p => p.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");
}

// Desk colors: Red → Yellow → Green → Red
const colorCycle = ["red", "yellow", "green"];

function generateOfficeLayout(floor) {
  officeLayout.innerHTML = "";

  // Example layout for each floor
  const deskCount = floor === "1" ? 4 : floor === "2" ? 6 : 9;

  for (let i = 0; i < deskCount; i++) {
    const desk = document.createElement("div");
    desk.className = "desk";
    desk.style.backgroundColor = "red";
    desk.addEventListener("click", () => {
      let currentColor = desk.style.backgroundColor;
      let nextColor =
        colorCycle[(colorCycle.indexOf(currentColor) + 1) % colorCycle.length];
      desk.style.backgroundColor = nextColor;
    });
    officeLayout.appendChild(desk);
  }
}

// Settings panel toggle
const settingsIcon = document.getElementById("settings-icon");
const settingsMenu = document.getElementById("settings-menu");

settingsIcon.addEventListener("click", () => {
  settingsMenu.classList.toggle("hidden");
});

// Dark mode
document.getElementById("dark-mode-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Language toggle
let english = true;
document.getElementById("language-toggle").addEventListener("click", () => {
  english = !english;

  document.getElementById("welcome-text").textContent = english
    ? "Welcome to SWIS Office App"
    : "欢迎使用深外办公应用";

  document.getElementById("start-button").textContent = english
    ? "Enter"
    : "进入";

  document.getElementById("floor-title").textContent = english
    ? "Select Floor"
    : "选择楼层";

  document.querySelectorAll(".floor-btn").forEach((btn, i) => {
    const floors = english ? ["1st Floor", "2nd Floor", "3rd Floor"] : ["一楼", "二楼", "三楼"];
    btn.textContent = floors[i];
  });

  document.getElementById("back-to-start").textContent = english ? "⬅ Back" : "⬅ 返回";
  document.getElementById("back-to-floor").textContent = english ? "⬅ Back" : "⬅ 返回";
});
