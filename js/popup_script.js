var btn = document.querySelector(".hotel-search-btn");
var popup = document.querySelector(".hotel-search-popup");


btn.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.toggle("hotel-search-popup_show");
});
