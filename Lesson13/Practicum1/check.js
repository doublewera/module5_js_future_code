let inputs = document.querySelectorAll("input");
for (let i of inputs) {
    if (!i.value) {
        console.log(i);
    }
}