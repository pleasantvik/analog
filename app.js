setInterval(setClock, 1000);

const hourHand = document.querySelector(".hour-hand");
const minutesHand = document.querySelector(".minutes-hand");
const secondsHand = document.querySelector(".seconds-hand");

function setClock() {
  const today = new Date();
  const seconds = today.getSeconds() / 60;
  const minutes = (seconds + today.getMinutes()) / 60;
  const hours = (minutes + today.getHours()) / 12;

  //   console.log(seconds * 360);

  setClockHandMovement(secondsHand, seconds);
  setClockHandMovement(minutesHand, minutes);
  setClockHandMovement(hourHand, hours);
}

function setClockHandMovement(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}

setClock();
