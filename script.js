/* Buttons */
function greet() {
    document.getElementById("greetText").textContent = "Assalamu Alaikum! Welcome to Bangladesh culture.";
}

function changeBg() {
    document.body.style.backgroundColor = "#99f299ff"; 
}

let values = [];

function addValue() {
    values.push("Respect for elders");
    values.push("Strong community support");
    document.getElementById("valueList").textContent = values.join(", ");
}