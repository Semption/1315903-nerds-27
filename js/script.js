var contactButton = document.querySelector('.contacts input[type="button"]');
var form = document.querySelector('.popup-form');
var closeButton = document.querySelector('.close-button a');

contactButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  form.classList.add("popup-show");
});

closeButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  form.classList.remove("popup-show");
});
