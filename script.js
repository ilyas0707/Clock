// seconds interval
setInterval(setClock, 1000)

const hours = document.querySelector('[data-hours-hand]')
const minutes = document.querySelector('[data-minutes-hand]')
const seconds = document.querySelector('[data-seconds-hand]')

// setting clock's rotation by ratio
function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12

    setRotation(seconds, secondsRatio)
    setRotation(minutes, minutesRatio)
    setRotation(hours, hoursRatio)
}

// setting rotation to hands
function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()