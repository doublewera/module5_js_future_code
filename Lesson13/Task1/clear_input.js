let inputs = document.querySelectorAll("input");
for(let i of inputs) {
    if ((i.type != "button") && (i.type != "submit")) {
        i.value = "";
    }
}