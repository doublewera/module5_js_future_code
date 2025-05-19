let tbls = document.querySelectorAll("table");
biggest_tbl = [];
tbl_id = "";
for (let tbl of tbls) {
    let tds = document.querySelectorAll(
        `#${tbl.id} > * > tr > *`);
    if (tds.length > biggest_tbl.length) {
        biggest_tbl = tds;
        tbl_id = tbl.id;
    }
}
console.log(tbl_id);