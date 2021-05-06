input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 10; index++) {
        basic.showLeds(`
            . # . # .
            # # # # #
            . # . # .
            . . . . .
            . . . . .
            `)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . . . . .
            # . # . #
            . # . # .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 10; index++) {
        basic.showLeds(`
            # # . # #
            . . . . .
            # # . # #
            # # . # #
            . . . . .
            `)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            # # . # #
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 10; index++) {
        basic.showLeds(`
            # # . # #
            . . . . .
            . # . # .
            . . . . .
            . . . . .
            `)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            # # . # #
            . # . # .
            . . . . .
            . . . . .
            `)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.clearScreen()
})
