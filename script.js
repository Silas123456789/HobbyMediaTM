function openPopup() {
    document.getElementById('standortPopup').style.display = 'block';
}

function closePopup() {
    document.getElementById('standortPopup').style.display = 'none';
}

window.openPopup = openPopup;
window.closePopup = closePopup;


document.addEventListener('click', function (event) {
    var popup = document.getElementById('standortPopup');
    if (event.target === popup) {
        closePopup();
    }
});


var popupImage = document.getElementById('popupImage');
if (popupImage) {
    popupImage.addEventListener('click', function () {
        closePopup();
    });
}

function showAlert() {
    alert("Die Registrierung ist für Dich nicht freigeschalten.")
}

function showAlert2() {
    alert("Nur von verifizierten Geräten möglich")
}