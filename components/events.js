import { buttonTree, buttonRain, buttonRoom, buttonFire, buttonPlay, buttonStop, buttonMore, buttonLess} from './elements.js'


export default function Events( {
    timer,
    sound
}) {


    buttonTree.addEventListener('click', () => {

        if(buttonTree.classList.toggle('select') == true) {
            sound.pauseMusic()
            sound.playTree()
        } else{
            sound.pauseMusic()
            buttonTree.classList.remove('select')
        }

        buttonRain.classList.remove('select')
        buttonRoom.classList.remove('select')
        buttonFire.classList.remove('select')
    })
    
    buttonRain.addEventListener('click', () => {
        
        if(buttonRain.classList.toggle('select') == true) {
            sound.pauseMusic()
            sound.playRain()
        } else {
            sound.pauseMusic()
            buttonRain.classList.remove('select')
        }

        buttonTree.classList.remove('select')
        buttonRoom.classList.remove('select')
        buttonFire.classList.remove('select')
    })
    
    buttonRoom.addEventListener('click', () => {

        if(buttonRoom.classList.toggle('select') == true) {
            sound.pauseMusic()
            sound.playRoom()
        } else {
            sound.pauseMusic()
            buttonRoom.classList.remove('select');
        }

        buttonRain.classList.remove('select')
        buttonTree.classList.remove('select')
        buttonFire.classList.remove('select')
    })
    
    buttonFire.addEventListener('click', () => {
        
        if(buttonFire.classList.toggle('select') == true) {
            sound.pauseMusic()
            sound.playFire()
        } else {
            sound.pauseMusic()
            buttonFire.classList.remove('select')
        }

        buttonRoom.classList.remove('select')
        buttonRain.classList.remove('select')
        buttonTree.classList.remove('select')
    })

    buttonPlay.addEventListener('click', () => {
        timer.coutdown();
        sound.pressButton();
    })
    
    buttonStop.addEventListener('click', () => {
        timer.hold();
        sound.pressButton();
    })
    
    buttonMore.addEventListener('click', () => {
        timer.more();
        sound.pressButton();
    })
    
    buttonLess.addEventListener('click', () => {
        timer.less();
        sound.pressButton();
    })
    

}

