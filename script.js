let currentFloor = 1;
const deskStates = { 1: [], 2: [], 3: [] };
const colors = ['red', 'yellow', 'green'];

function $(id) {
  return document.getElementById(id);
}

function goTo(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  $(pageId).classList.add('active');
}

function goBack() {
  goTo('start-page');
}

function goToFloorPage() {
  goTo('floor-page');
}

$('start-button').onclick = () => {
  goTo('floor-page');
};

function goToOffice(floor) {
  currentFloor = floor;
  $('floor-title').innerText = `${floor} Floor`;
  generateOfficeLayout(floor);
  goTo('office-page');
}

function generateOfficeLayout(floor) {
  const container = $('office-layout');
  container.innerHTML = '';
  const clusters = 4;
  for (let c = 0; c < clusters; c++) {
    const cluster = document.createElement('div');
    cluster.className = 'office-cluster';
    for (let i = 0; i < 4; i++) {
      const index = c * 4 + i;
      const desk = document.createElement('div');
      desk.className = 'desk';
      const state = deskStates[floor][index] || 0;
      desk.style.backgroundColor = colors[state];
      desk.onclick = () => {
        const newState = (deskStates[floor][index] = (state + 1) % 3);
        desk.style.backgroundColor = colors[newState];
      };
      cluster.appendChild(desk);
    }
    container.appendChild(cluster);
  }
}

function toggleSettings() {
  $('settings-panel').classList.toggle('open');
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

let currentLang = 'EN';
function switchLanguage() {
  currentLang = currentLang === 'EN' ? 'ZH' : 'EN';
  $('welcome-message').innerText = currentLang === 'EN' ? 'Welcome to SWIS Office App' : '欢迎来到深外办公系统';
  $('start-button').innerText = currentLang === 'EN' ? 'Enter' : '进入';
  $('floor-title').innerText = `${currentFloor} ${currentLang === 'EN' ? 'Floor' : '楼'}`;
}
