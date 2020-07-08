var postLink = document.querySelector(".post-link");
var popUp = document.querySelector(".pop-up");
var popUpClose = popUp.querySelector(".button-close");
var popUpName = popUp.querySelector(".pop-up__input_name");
var popUpEmail = popUp.querySelector(".pop-up__input_email");
var popUpLetter = popUp.querySelector(".pop-up__input_letter");
var popUpForm = popUp.querySelector(".pop-up__form");

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

ymaps.ready(init);
function init() {
    var map = new ymaps.Map("map", {
        center: [59.939135, 30.321458],
        zoom: 17,
        controls: ['zoomControl'],
        behaviors: ['drag']
    });

    var placemark = new ymaps.Placemark([59.938635, 30.323118], {},
        {
            iconLayout: 'default#image',
            iconImageHref: '../img/map-marker.png',
            iconImageSize: [231, 190],
            iconImageOffset: [-50, -210]
        });
        
       map.geoObjects.add(placemark);
};