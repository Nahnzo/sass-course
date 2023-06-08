const navBtn = document.querySelector(".nav-icon-btn");
const navIcon = document.querySelector(".nav-icon");
const nav = document.querySelector(".header-top-row");
navBtn.addEventListener("click", () => {
  navIcon.classList.toggle("nav-icon--active");
  nav.classList.toggle("header-top-row-mobile");
  document.body.classList.toggle("no-scroll");
});

let map;

main();
async function main() {
  await ymaps3.ready;
  map = new ymaps3.YMap(document.getElementById("map"), {
    location: {
      center: [59.93863, 30.31413],
      zoom: 10,
    },
  });

  map.addChild(new ymaps3.YMapDefaultSchemeLayer());
}
