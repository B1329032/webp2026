let container = document.getElementById("container");
 
function randomChar() {
    return String.fromCharCode(97 + Math.floor(Math.random() * 26));
}
 
function generateInitial() {
    let count = Math.floor(Math.random() * 3); // 0~2
    let str = "";
 
    for (let i = 0; i < count; i++) {
        str += randomChar();
    }
 
    container.innerText = str;
}
 
function addNewChars() {
    let count = Math.floor(Math.random() * 3) + 1; // 1~3
    let str = "";
 
    for (let i = 0; i < count; i++) {
        str += randomChar();
    }
 
    container.innerText += str;
}
 
window.onload = function () {
    generateInitial();
};
 
window.addEventListener("keyup", function (e) {
 
    let text = container.innerText;
 
    if (text.length > 0 && e.key === text[0]) {
        container.innerText = text.slice(1);
    }
 
    addNewChars();
});