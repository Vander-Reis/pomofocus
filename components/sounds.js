export default function Sounds() {
    
    const rain = new Audio("./music/Chuva.wav")
    const tree = new Audio("./music/Floresta.wav")
    const room = new Audio("./music/Cafeteria.wav")
    const fire = new Audio("./music/Lareira.wav")
    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

    function playRain() {
        rain.play();
    }

    function playTree() {
        tree.play()
    }

    function playRoom() {
        room.play()
    }

    function playFire() {
        fire.play()
    }

    function pauseMusic() {
        rain.pause();
        tree.pause();
        room.pause();
        fire.pause();
    }

    function pressButton() {
        buttonPressAudio.play()
    }

    function finishTimer() {
        kitchenTimer.play();
    }

    return {
        rain,
        tree,
        room,
        fire,
        playRain,
        playTree,
        playRoom,
        playFire,
        pauseMusic,
        pressButton,
        finishTimer
    }

}