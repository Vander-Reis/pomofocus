import { minutesDisplay, secondsDisplay } from "./elements.js"
import Sounds from "./sounds.js"

import Timer from "./timer.js"

import Events from "./events.js"

const timer = Timer({
    minutesDisplay,
    secondsDisplay
})

const sound = Sounds()

Events({timer, sound})

