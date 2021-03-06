var contactButton = document.querySelector('.contacts .button-contacts.button-red');
var form = document.querySelector('.popup-form');
var closeButton = document.querySelector('.close-button button');
var yournameField = form.querySelector('input#yourname');
var emailField = form.querySelector('input#email');
var messageField = form.querySelector('textarea#message');
var sendButton = form.querySelector('.button-contacts.send');
var requiredField = [yournameField,emailField,messageField];

contactButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  form.classList.add("popup-show");
  yournameField.focus();
});

closeButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  form.classList.remove("popup-show");
});

window.addEventListener("keydown", function (evt) {
   if (evt.keyCode === 27) {
     evt.preventDefault();
     if (form.classList.contains("popup-show")) {
       form.classList.remove("popup-show");
     }
   }
 });

sendButton.addEventListener("click", function (evt) {
if (yournameField.value.length <= 0 || emailField.value.length <= 0 || messageField.value.length <= 0) {
  evt.preventDefault();
  for (i=0; i<=(requiredField.length-1); i++) {
    if (requiredField[i].value.length <= 0) {
      requiredField[i].classList.add("empty");
    }
   }
  }
});

yournameField.addEventListener("click", function (evt) {
  yournameField.classList.remove("empty");
});
emailField.addEventListener("click", function (evt) {
  emailField.classList.remove("empty");
});
messageField.addEventListener("click", function (evt) {
  messageField.classList.remove("empty");
});
