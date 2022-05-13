import { buttonSum, buttonMom, elementoRoot } from './elements.js'

export default function DarkMode() {

    buttonSum.addEventListener('click', () => {

        buttonSum.classList.add('hide')
        buttonMom.classList.remove('hide')
        elementoRoot.classList.add('modeDark')
        

    })

    buttonMom.addEventListener('click', () => {
        buttonMom.classList.add('hide')
        buttonSum.classList.remove('hide')
        elementoRoot.classList.remove('modeDark')
    })

}