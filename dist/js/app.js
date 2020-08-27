const overlay = document.querySelectorAll(".item");

const screen = window.screen.width;

console.log(overlay);
console.log(screen);

if (screen > 1024) {
  overlay.forEach(() => {
    overlay.className.remove("overlay");
  });
}
