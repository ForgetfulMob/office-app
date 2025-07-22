document.addEventListener("DOMContentLoaded", () => {
  const states = ['red', 'yellow', 'green'];
  const corners = document.querySelectorAll('.corner');

  corners.forEach(corner => {
    corner.style.backgroundColor = 'red';
    corner.addEventListener('click', () => {
      const current = corner.style.backgroundColor;
      const index = states.indexOf(current);
      const next = states[(index + 1) % states.length];
      corner.style.backgroundColor = next;
    });
  });
});

function goToMenu() {
  document.getElementById('start-screen').classList.add('hidden');
  document.getElementById('menu-screen').classList.remove('hidden');
}

function selectFloor(floor) {
  document.getElementById('menu-screen').classList.add('hidden');
  document.getElementById('office-screen').classList.remove('hidden');
  document.getElementById('floor-label').innerText = `${floor}F Office View`;
}

function goBack() {
  document.getElementById('office-screen').classList.add('hidden');
  document.getElementById('menu-screen').classList.remove('hidden');
}
