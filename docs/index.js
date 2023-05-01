const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    let time = inputEl.value;
    clearInterval(seconds);
    seconds = setInterval(myCounter, 1000);
    function myCounter() {
      let hour = Math.floor(time / 60 / 60);
      let min = Math.floor(time / 60);
      let sec = time % 60;
      hour = hour < 10 ? "0" + hour : hour;
      sec = sec < 10 ? "0" + sec : sec;
      min = min < 10 ? "0" + min : min;
      timerEl.innerHTML = `${hour}hh:${min}mm:${sec}`;
      time--;
    }
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
});
const keyDown = (e) => {
  const value = e.value;
  e.value = value.replace(/\D/g, "");
};

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);
  animateTimer(seconds);
  inputEl.value = "";
});
