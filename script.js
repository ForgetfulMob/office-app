let currentLanguage = "EN";
let isDark = false;

function goToFloorSelect() {
  showPage("floor-select");
}
function goToStart() {
  showPage("start-page");
}
function loadOffice(floor) {
  showPage("office-map");
  document.getElementById("floor-title").textContent = currentLanguage === "EN" ? `${floor} Floor Office` : `${floor} 办公楼层`;
  createOfficeLayout();
}

function showPage(id) {
  document.querySelectorAll(".page").forEach(p => p.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

function toggleSettings() {
  document.getElementById("settings-panel").classList.toggle("show");
}

function toggleDarkMode() {
  isDark = !isDark;
  document.body.classList.toggle("dark", isDark);
}

function switchLanguage() {
  currentLanguage = currentLanguage === "EN" ? "CN" : "EN";
  document.getElementById("welcome-msg").textContent = currentLanguage === "EN" ? "Welcome to the SWIS Office App" : "欢迎来到深外办公室应用";
  document.getElementById("enter-btn").textContent = currentLanguage === "EN" ? "Enter" : "进入";
  document.getElementById("select-floor-label").textContent = currentLanguage === "EN" ? "Select a Floor" : "选择楼层";
  document.getElementById("back-label").textContent = currentLanguage === "EN" ? "Back" : "返回";
  document.getElementById("dark-mode-label").textContent = currentLanguage === "EN" ? "Dark Mode" : "深色模式";
  document.getElementById("lang-switch").textContent = currentLanguage === "EN" ? "中文" : "English";
}

function createOfficeLayout() {
  const map = document.getElementById("map-container");
  map.innerHTML = "";
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    cell.className = "office-cell";
    cell.dataset.colorIndex = 0;
    cell.addEventListener("click", () => cycleColor(cell));
    map.appendChild(cell);
  }
}

function cycleColor(el) {
  const colors = ["red", "yellow", "green"];
  let index = parseInt(el.dataset.colorIndex);
  index = (index + 1) % colors.length;
  el.style.backgroundColor = colors[index];
  el.dataset.colorIndex = index;
}
