let clock = document.querySelector(".clock");
let alarmSelected = document.querySelector(".timeBox");

let hourArm = document.querySelector(".hourArm");
let minuteArm = document.querySelector(".minuteArm");
let secondArm = document.querySelector(".secondArm");

let hourPart = document.querySelector(".hourPart p");
let minutePart = document.querySelector(".minutePart p");
let secondPart = document.querySelector(".secondPart p");

setInterval(() => {
    dateObj = new Date();
    hour = dateObj.getHours();
    minute = dateObj.getMinutes();
    second = dateObj.getSeconds();

    hourRotation = 30 * hour + minute / 2;
    minuteRotation = 6 * minute;
    secondRotation = 6 * second;

    let hourStr = `${hour}`;
    let minuteStr = `${minute}`;

    hourArm.style.transform = `rotate(${hourRotation}deg)`;
    minuteArm.style.transform = `rotate(${minuteRotation}deg)`;
    secondArm.style.transform = `rotate(${secondRotation}deg)`;

    let timeSelected = alarmSelected.value;
    timeSelected = timeSelected.split(":");
    let hourSelected = timeSelected[0];
    let minuteSelected = timeSelected[1];

    if (hourStr == hourSelected && minuteStr == minuteSelected ) {
        clock.style.animationName = "Shake";
        snoozeBtn.style.display = "block";
    }

    hourPart.innerText = `${hour}`;
    minutePart.innerText = `${minute}`;
    secondPart.innerText = `${second}`;
});

let snoozeBtn = document.querySelector(".snoozeBtn");
snoozeBtn.addEventListener("click", resetAlarm);

function resetAlarm() {
    alarmSelected.value = "";
    clock.style.animationName = "";
    snoozeBtn.style.display = "none";
}