// http://api.qrserver.com/v1/create-qr-code/?data=www.google.com&size=100x100 
let text = document.getElementById('TEXT');
let url = document.getElementById('URL');
let radio1 = document.getElementById('flexRadioDefault1');
let radio2 = document.getElementById('flexRadioDefault2');

radio1.addEventListener('change', () => {
    url.disabled = true;
    text.disabled = false;
});
radio2.addEventListener('change', () => {
    url.disabled = false;
    text.disabled = true;
});
