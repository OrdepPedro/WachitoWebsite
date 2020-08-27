const overlay = document.querySelectorAll(".overlay");

const screen = window.screen.width;

if (screen < 1024) {
  overlay.forEach(() => {
    overlay.className.remove("overlay");
  });
}
