window.onload = function () {
  setTimeout(() => {
    document.getElementById("loading").classList.add("hidden");
    document.getElementById("main").classList.remove("hidden");
  }, 2000);
};

function cycleColor(el) {
  const current = el.style.backgroundColor || getComputedStyle(el).backgroundColor;

  if (current === "rgb(255, 0, 0)") {
    el.style.backgroundColor = "yellow";
  } else if (current === "rgb(255, 255, 0)") {
    el.style.backgroundColor = "green";
  } else {
    el.style.backgroundColor = "red";
  }
}
