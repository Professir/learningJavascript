const items = document.querySelectorAll('#item');
const sortableList = document.querySelector('#sortableList');

items.forEach(item => {
    item.addEventListener("dragstart", () => {
        // adding dragging class to item after a play
        setTimeout(() => item.classList.add("dragging"), 0);
    });
    // Removing dragging class from item on dragend event
    item.addEventListener("dragend", () => item.classList.remove("dragging"));
});

const initSortableList = (e) => {
    e.preventDefault();
    const draggingItem = sortableList.querySelector(".dragging");
    // getting all items except currently dragging and making array of them
    const sibling = [...sortableList.querySelectorAll("#item:not(.dragging)")];

    // finding the sibling after which the dragging item should be placed
    let nextSibling = sibling.find(sibling => {
        return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
    });

    // Inserting the dragging item before the found sibling
    sortableList.insertBefore(draggingItem, nextSibling);
}

sortableList.addEventListener("dragover", initSortableList);
sortableList.addEventListener("dragenter", e => e.preventDefault());