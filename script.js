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
  document.getElementById("floor-title").textContent = `${floor} Floor Office`;
  createOfficeLayout(floor);
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
  alert(`Switched to ${currentLanguage === "EN" ? "English" : "中文"}`);
}

function createOfficeLayout(floor) {
  const map = document.getElementById("map-container");
  map.innerHTML = "";
  const desks = getDesksForFloor(floor);
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    cell.classList.add("office-cell");
    if (desks.includes(i)) {
      const desk = document.createElement("div");
      desk.classList.add("teacher-desk");
      desk.addEventListener("click", () => cycleColor(desk));
      cell.appendChild(desk);
    }
    map.appendChild(cell);
  }
}

function getDesksForFloor(floor) {
  // positions in grid: 0-8 (3x3)
  if (floor === "1st") return [0, 2, 6, 8];
  if (floor === "2nd") return [1, 3, 5, 7];
  if (floor === "3rd") return [0, 4, 8];
  return [];
}

function cycleColor(el) {
  const colors = ["red", "yellow", "green"];
  const current = el.style.backgroundColor;
  const next = colors[(colors.indexOf(current) + 1) % colors.length];
  el.style.backgroundColor = next;
}
