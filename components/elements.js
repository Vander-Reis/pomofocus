const buttonTree = document.querySelector(".tree")
const buttonRain = document.querySelector(".rain")
const buttonRoom = document.querySelector(".room")
const buttonFire = document.querySelector(".fire")
const buttonPlay = document.querySelector(".play")
const buttonStop = document.querySelector(".stop")
const buttonMore = document.querySelector(".more")
const buttonLess = document.querySelector(".less")
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let timerTimeOut;
let minutes = Number(minutesDisplay.textContent);

export {
    buttonTree,
    buttonRain,
    buttonRoom,
    buttonFire,
    buttonPlay,
    buttonStop,
    buttonMore,
    buttonLess,
    minutesDisplay,
    secondsDisplay,
    timerTimeOut,
    minutes
}