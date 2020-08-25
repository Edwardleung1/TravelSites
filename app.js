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

// Autocomplete (Search Locations)
const ac = document.querySelector(".autocomplete");
// Init ac with options
M.Autocomplete.init(ac, {
  data: {
    Africa: null,
    California: null,
    Canada: null,
    Spain: null,
    Dubai: null,
    "Hong Kong": null,
    Ibiza: null,
    "Los Angeles": null,
    Sydney: null,
    Florida: null,
  },
});
