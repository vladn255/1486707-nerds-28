let postLink = document.querySelector(".post-link");
let popUp = document.querySelector(".pop-up");
let popUpClose = popUp.querySelector(".button-close");
let popUpName = popUp.querySelector(".pop-up__input_name");
let popUpEmail = popUp.querySelector(".pop-up__input_email");
let popUpLetter = popUp.querySelector(".pop-up__input_letter");
let popUpForm = popUp.querySelector(".pop-up__form");

var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false;
}

postLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    popUp.classList.add("pop-up_show");
    popUpName.focus();

    if (storage) {
        popUpName.value = storage;
        popUpEmail.value = storage;
    }
});

popUpClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    popUp.classList.remove("pop-up_show");
    popUp.classList.remove("pop-up_error");
});

popUpForm.addEventListener("submit", function (evt) {
    if (!popUpName.value || !popUpEmail.value || !popUpLetter.value) {
        evt.preventDefault()
        popUp.classList.add("pop-up_error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("login", popUpName.value);
            localStorage.setItem("email", popUpEmail.value);
            localStorage.setItem("letter", popUpLetter);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (popUp.classList.contains("pop-up_show")) {
            evt.preventDefault();
            popUp.classList.remove("pop-up_show");
            popUp.classList.remove("pop-up_error");
        }
    }
});
