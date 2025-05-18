let inputs = document.querySelectorAll("input");
for(let i of inputs) {
    if ((i.type == "checkbox") || (i.type == "radio")) {
        console.log(`[for=${i.id}]`);
        let lbl = null;
        if (i.id) {
            console.log(document.querySelector(`label[for=${i.id}]`));
            lbl = document.querySelector(`label[for=${i.id}]`);
        }
        if (!lbl) {
            console.error(i);
        }
    }
}