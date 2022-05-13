import Sounds from "./sounds.js"

const sound = Sounds()

export default function Timer({
    minutesDisplay,
    secondsDisplay,
}) {

    let timerTimeOut
    let minutes = Number(minutesDisplay.textContent)

  function updateDisplay(newMinutes, seconds) {

    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }

  function coutdown() {
    timerTimeOut = setTimeout(() => {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      let isFinished = minutes <= 0 && seconds <= 0

      if (isFinished) {
        
        updateDisplay()
        sound.timeEnd()
        return;
      }

      if (seconds <= 0) {
        seconds = 60
        --minutes
      }

      updateDisplay(minutes, String(seconds - 1))

      coutdown()
    }, 1000)
  }

  function hold() {
    clearTimeout(timerTimeOut)
  }

  function more() {
    minutes = minutes + 5;

    if (minutes > 60) {
      alert("Limite de tempo")
    } else {
      updateDisplay(minutes, 0)
    }
  }

  function less() {
    minutes = minutes - 5

    if (minutes < 0) {
      alert("Limite de tempo")
    } else {
      updateDisplay(minutes, 0)
    }
  }

  return {
    updateDisplay,
    coutdown,
    hold,
    more,
    less
  };
}
