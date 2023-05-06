const colorPickerBtn = document.querySelector("#color-picker");
const colorList = document.querySelector(".all-colors");
const clearAll = document.querySelector(".clear-all");
const pickedColors = JSON.parse(localStorage.getItem("picked-colors") || "[]");

const copyColor = elem => {
    navigator.clipboard.writeText(elem.dataset.color);
    elem.innerText = "Copied";
    setTimeout(() => elem.innerText = elem.dataset.color, 700);
}

const showColors = () => {
    if(!pickedColors.length) return; // Returning if there are no picked colors
    colorList.innerHTML = pickedColors.map(color => `
    <li class="color
    cursor-pointer">
    <!-- rect -->
    <span class="rect
    block h-5 w-5 rounded-md mr-2" style="background: ${color}; border: 1px solid ${color == "#ffffff" ? "#ccc" : color}"></span>
    <!-- value -->
    <span class="value
    text-base font-medium uppercase" data-color="${color}">${color}</span>
    </li>`).join(""); // Generating li for the picked color and adding it to the colorList
    document.querySelector(".picked-colors").classList.remove("hidden");
    
    // Add a click event listener to each color element to copy the color code
    document.querySelectorAll(".color").forEach(li => {
        li.addEventListener("click", e => copyColor(e.currentTarget.lastElementChild));
    })
}
showColors();

const activeEyeDropper = async () => {
    try {
        // Opening the eye dropper and getting the selected color
        const eyeDropper = new EyeDropper();
        const {sRGBHex} = await eyeDropper.open();
        navigator.clipboard.writeText(sRGBHex);
        
        // Adding the color to the list if it doesn't already exist
        if(!pickedColors.includes(sRGBHex)) {
            pickedColors.push(sRGBHex);
            localStorage.setItem("picked-colors", JSON.stringify(pickedColors))
        }
    showColors();
    } catch (e) {
        console.log(e);
    }
}

// Clearing all picked colors, updating localstorage, and hiding the pickedColors element
const clearAllColors = () => {
    pickedColors.length = 0;
    localStorage.setItem("picked-colors", JSON.stringify(pickedColors));
    document.querySelector(".picked-colors").classList.add("hidden");
}

clearAll.addEventListener("click", clearAllColors);
colorPickerBtn.addEventListener("click", activeEyeDropper);