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

// Material Boxed
// Multiple = querySelectorAll
const mb = document.querySelectorAll(".materialboxed");
// Init mb with empty options
M.Materialbox.init(mb, {});

// ScrollSpy
// Multiple = querySelectorAll
const ss = document.querySelectorAll(".scrollspy");
// Init ss with empty options
M.ScrollSpy.init(ss, {});
