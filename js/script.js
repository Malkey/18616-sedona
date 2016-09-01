var btn = document.querySelector(".hotel-search-btn");
var popup = document.querySelector(".hotel-search-popup");
var form = popup.querySelector(".search-form");
var search_btn = popup.querySelector(".search-btn");

var arrival = popup.querySelector("[name=arrival-date]");
var departure = popup.querySelector("[name=departure-date]");
var adult = popup.querySelector("[name=adult]");
var children = popup.querySelector("[name=children]");

var storage_adult = localStorage.getItem("adult");
var storage_children = localStorage.getItem("children");


btn.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.toggle("hotel-search-popup_show");

  search_btn.classList.remove("search-btn_error");
  search_btn.offsetWidth = popup.offsetWidth;

  if (storage_adult) {
    adult.value = storage_adult;
  }

  if (storage_children) {
    children.value = storage_children;
  }
});

form.addEventListener("submit", function (event) {
  if (!arrival.value || !departure.value || !adult.value || !children.value) {
    event.preventDefault();
    search_btn.classList.remove("search-btn_error");
    search_btn.offsetWidth = popup.offsetWidth;
    search_btn.classList.add("search-btn_error");
  } else {
    localStorage.setItem("adult", adult.value);
    localStorage.setItem("children", children.value);
  }
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("hotel-search-popup_show")) {
      popup.classList.remove("hotel-search-popup_show");
    }
  }
});

function initialize() {
  var mapOptions = {
    zoom: 9,
    center: new google.maps.LatLng(34.76, -111.7355)
  }
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  var myLatLng = new google.maps.LatLng(34.86973, -111.76098);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map
  });
}
google.maps.event.addDomListener(window, "load", initialize);
