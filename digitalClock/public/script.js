let section = document.querySelector("section"),
icons = document.querySelector(".icons");

icons.onclick = () => {
    section.classList.toggle("dark");
}

// Creating a function and calling it in every seconds
setInterval(() => {
    let date = new Date(),
    hour = date.getHours(),
    min = date.getMinutes(),
    sec = date.getSeconds();

    let d;
    d = hour < 12 ? "AM" : "PM"; // if hour is smaller 12 than its value will be AM else its value will be PM
    hour = hour > 12 ? hour - 12 : hour;
    hour = hour == 0 ? hour = 12 : hour;

    document.querySelector(".hour_num").innerText = hour;
    document.querySelector(".min_num").innerText = min;
    document.querySelector(".sec_num").innerText = sec;
    document.querySelector(".am_pm").innerText = d;
}, 1000);