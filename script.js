let currentFloor = 1;
const deskStates = { 1: [], 2: [], 3: [] };
const colors = ['red', 'yellow', 'green'];
let currentLang = 'EN';

// Shorthand for document.getElementById
function $(id) {
  return document.getElementById(id);
}

// Page navigation
function goTo(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  $(pageId).classList.add('active');
}

// Return to start page
function goBack() {
  goTo('start-page');
}

// Go to floor selection
function goToFloorPage() {
  goTo('floor-page');
}

// Start button handler
window.onload = () => {
  $('start-button').onclick = () => {
    goTo('floor-page');
  };
};

// Floor selection
function goToOffice(floor) {
  currentFloor = floor;
  $('floor-title').innerText = currentLang === 'EN' ? `${floor} Floor` : `${floor} 楼`;
  generateOfficeLayout(floor);
  goTo('office-page');
}

// Office Layout Generator
function generateOfficeLayout(floor) {
  const container = $('office-layout');
  container.innerHTML = '';
  const clusters = 4;

  // Initialize desk states
  if (!Array.isArray(deskStates[floor])) {
    deskStates[floor] = [];
  }

  for (let c = 0; c < clusters; c++) {
    const cluster = document.createElement('div');
    cluster.className = 'office-cluster';

    for (let i = 0; i < 4; i++) {
      const index = c * 4 + i;
      const desk = document.createElement('div');
      desk.className = 'desk';

      // Ensure default state exists
      if (typeof deskStates[floor][index] === 'undefined') {
        deskStates[floor][index] = 0;
      }

      desk.style.backgroundColor = colors[deskStates[floor][index]];

      desk.onclick = () => {
        deskStates[floor][index] = (deskStates[floor][index] + 1) % 3;
        desk.style.backgroundColor = colors[deskStates[floor][index]];
      };

      cluster.appendChild(desk);
    }

    container.appendChild(cluster);
  }
}

// Settings Panel Toggle
function toggleSettings() {
  $('settings-panel').classList.toggle('open');
}

// Dark Mode Toggle
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

// Language Switcher
function switchLanguage() {
  currentLang = currentLang === 'EN' ? 'ZH' : 'EN';

  // Update UI text
  $('welcome-message').innerText =
    currentLang === 'EN' ? 'Welcome to SWIS Office App' : '欢迎来到深外办公系统';
  $('start-button').innerText = currentLang === 'EN' ? 'Enter' : '进入';
  $('floor-title').innerText = currentLang === 'EN'
