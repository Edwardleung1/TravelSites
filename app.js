// Sidenav
const sideNav = document.querySelector(".sidenav");
// Init sidenav
M.Sidenav.init(sideNav, {});

// Slider
const slider = document.querySelector(".slider");
// Init slider with options
M.Slider.init(slider, {
  indicators: false,
  height: 500,
  transition: 500,
  interval: 5000,
});
