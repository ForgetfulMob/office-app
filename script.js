let currentLang = 'en';
let darkMode = false;
const deskStates = {
  1: {}, 2: {}, 3: {}
};

document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-button");
  const floorBtns = document.querySelectorAll(".floor-btn");
  const backToStart = document.getElementById("back-to-start");
  const backToFloor = document.getElementById("back-to-floor");
  const settingsBtn = document.getElementById("settings-icon");
  const settingsPanel = document.getElementById("settings-panel");
  const langToggle = document.getElementById("language-toggle");
  const darkToggle = document.getElementById("dark-mode-toggle");

  startBtn.onclick = () => showPage("floor-page");
  backToStart.onclick = () => showPage("start-page");
  backToFloor.onclick = () => showPage("floor-page");
  settingsBtn.onclick = () => settingsPanel.classList.toggle("open");
  darkToggle.onclick = toggleDarkMode;
  langToggle.onclick = toggleLanguage;

  floorBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const floor = parseInt(btn.dataset.floor);
      renderOfficeLayout(floor);
      document.getElementById("floor-title").textContent = `${btn.textContent}`;
      showPage("office-page");
    });
  });

  applyLanguage();
});

function showPage(id) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function renderOfficeLayout(floor) {
  const layout = document.getElementById("office-layout");
  layout.innerHTML = '';
  const clusters = 4;
  const desksPerCluster = 4;

  for (let i = 0; i < clusters; i++) {
    const cluster = document.createElement("div");
    cluster.className = "office-cluster";

    for (let j = 0; j < desksPerCluster; j++) {
      const deskId = `${floor}-${i}-${j}`;
      const desk = document.createElement("div");
      desk.className = "desk";
      desk.dataset.id = deskId;

      const state = deskStates[floor][deskId] || 0;
      desk.style.backgroundColor = ["red", "yellow", "green"][state];

      desk.onclick = () => {
        const current = deskStates[floor][deskId] || 0;
        const next = (current + 1) % 3;
        deskStates[floor][deskId] = next;
        desk.style.backgroundColor = ["red", "yellow", "green"][next];
      };

      cluster.appendChild(desk);
    }

    layout.appendChild(cluster);
  }
}

function toggleDarkMode() {
  darkMode = !darkMode;
  document.body.classList.toggle("dark-mode");
}

function toggleLanguage() {
  currentLang = currentLang === "en" ? "zh" : "en";
  applyLanguage();
}

function applyLanguage() {
  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = el.getAttribute(`data-${currentLang}`);
  });
}
