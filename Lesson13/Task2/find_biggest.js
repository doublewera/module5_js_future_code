function biggest_list(lists, biggest) {
    if (!lists.length) {
        return null;
    }
    let i = 0;
    let result = biggest;
    if (!result) {
        result = lists[0];
        i = 1;
    }
    for (; i < lists.length; i++) {
        if (result.children.length < lists[i].children.length) {
            result = lists[i];
        }
    }
    return result;
}

let lists = document.querySelectorAll("ol");
let biggest = biggest_list(lists, null);
biggest = biggest_list(
    document.querySelectorAll("ul"),
    biggest
);
console.log(biggest.id);
