radio.onReceivedNumber(function (receivedNumber) {
    assemble = receivedNumber
})
let pergerakan = 0
let assemble = 0
radio.setGroup(1)
assemble = 0
let Bahaya = 0
Bahaya = 0
basic.forever(function () {
    let LineClear = 0
    if (assemble == LineClear) {
        basic.showLeds(`
            . # . . #
            . . # # .
            . . # . #
            # # . . .
            . . # . .
            `)
    } else if (assemble == Bahaya) {
        basic.showIcon(IconNames.Ghost)
    } else {
    	
    }
})
basic.forever(function () {
    if (assemble == Bahaya) {
        pergerakan = Math.abs(input.acceleration(Dimension.Strength) - 1000)
        if (pergerakan > 100) {
            basic.showIcon(IconNames.Ghost)
        }
    }
})
