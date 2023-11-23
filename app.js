let [milliSecond, seconds, minutes, hours] = [0, 0, 0, 0];
let timeRef = document.querySelector(".timer-display");
let int = null;

document.getElementById("start-timer").addEventListener("click", () => {
  if (int !== null) {
    clearInterval(int);
  }
  int = setInterval(displayTimer, 10);
});
document.getElementById("pause-timer").addEventListener("click", () => {
  clearInterval(int);
});
document.getElementById("reset-timer").addEventListener("click", () => {
  clearInterval(int);
  [milliSecond, seconds, minutes, hours] = [0, 0, 0, 0];
  timeRef.innerHTML = "00 : 00 : 00 : 0";
});
function displayTimer() {
  milliSecond += 10;
  if (milliSecond == 1000) {
    milliSecond = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms =
    milliSecond < 10
      ? "0" + milliSecond
      : milliSecond < 100
      ? "00" + milliSecond
      : milliSecond;

  timeRef.innerHTML = `${h}: ${m} : ${s} : ${ms}`;
}
