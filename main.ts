input.onButtonPressed(Button.A, function () {
    if (Action == 5) {
        game.addScore(1)
        Action = 0
        if (game.score() == 1) {
            game.startCountdown(4000)
        } else if (game.score() == 2) {
            game.startCountdown(3000)
        } else if (game.score() == 3) {
            game.startCountdown(2500)
        } else if (game.score() == 4) {
            game.startCountdown(2000)
        } else if (game.score() == 4) {
            game.startCountdown(1500)
        } else if (game.score() >= 5) {
            game.startCountdown(1000)
        }
    } else {
        Action = -2
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    if (Action == 1) {
        game.addScore(1)
        Action = 0
        if (game.score() == 1) {
            game.startCountdown(4000)
        } else if (game.score() == 2) {
            game.startCountdown(3000)
        } else if (game.score() == 3) {
            game.startCountdown(2500)
        } else if (game.score() == 4) {
            game.startCountdown(2000)
        } else if (game.score() == 4) {
            game.startCountdown(1500)
        } else if (game.score() >= 5) {
            game.startCountdown(1000)
        }
    } else {
        Action = -2
    }
})
input.onGesture(Gesture.ScreenUp, function () {
    if (Action == 3) {
        game.addScore(1)
        Action = 0
        if (game.score() == 1) {
            game.startCountdown(4000)
        } else if (game.score() == 2) {
            game.startCountdown(3000)
        } else if (game.score() == 3) {
            game.startCountdown(2500)
        } else if (game.score() == 4) {
            game.startCountdown(2000)
        } else if (game.score() == 4) {
            game.startCountdown(1500)
        } else if (game.score() >= 5) {
            game.startCountdown(1000)
        }
    } else {
        Action = -2
    }
})
input.onGesture(Gesture.ScreenDown, function () {
    if (Action == 4) {
        game.addScore(1)
        Action = 0
        if (game.score() == 1) {
            game.startCountdown(4000)
        } else if (game.score() == 2) {
            game.startCountdown(3000)
        } else if (game.score() == 3) {
            game.startCountdown(2500)
        } else if (game.score() == 4) {
            game.startCountdown(2000)
        } else if (game.score() == 4) {
            game.startCountdown(1500)
        } else if (game.score() >= 5) {
            game.startCountdown(1000)
        }
    } else {
        Action = -2
    }
})
input.onButtonPressed(Button.B, function () {
    if (Action == 6) {
        game.addScore(1)
        Action = 0
        if (game.score() == 1) {
            game.startCountdown(4000)
        } else if (game.score() == 2) {
            game.startCountdown(3000)
        } else if (game.score() == 3) {
            game.startCountdown(2500)
        } else if (game.score() == 4) {
            game.startCountdown(2000)
        } else if (game.score() == 4) {
            game.startCountdown(1500)
        } else if (game.score() >= 5) {
            game.startCountdown(1000)
        }
    } else {
        Action = -2
    }
})
input.onGesture(Gesture.TiltRight, function () {
    if (Action == 2) {
        game.addScore(1)
        Action = 0
        if (game.score() == 1) {
            game.startCountdown(4000)
        } else if (game.score() == 2) {
            game.startCountdown(3000)
        } else if (game.score() == 3) {
            game.startCountdown(2500)
        } else if (game.score() == 4) {
            game.startCountdown(2000)
        } else if (game.score() == 4) {
            game.startCountdown(1500)
        } else if (game.score() >= 5) {
            game.startCountdown(1000)
        }
    } else {
        Action = -2
    }
})
let Action = 0
Action = 0
game.startCountdown(5000)
loops.everyInterval(1000, function () {
	
})
basic.forever(function () {
    if (Action == -2) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # # # # #
            `)
        control.waitMicros(2032)
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        game.gameOver()
    }
})
basic.forever(function () {
    if (Action == 0) {
        Action = randint(1, 6)
    }
    if (Action == 1) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # . . . .
            . # . . .
            . . # . .
            `)
    } else if (Action == 2) {
        basic.showLeds(`
            . . # . .
            . . . # .
            . . . . #
            . . . # .
            . . # . .
            `)
    } else if (Action == 3) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . . . . .
            . . . . .
            `)
    } else if (Action == 4) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . #
            . # . # .
            . . # . .
            `)
    } else if (Action == 5) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # # # # #
            # . . . #
            # . . . #
            `)
    } else if (Action == 6) {
        basic.showLeds(`
            # # # # .
            # . . # #
            # # # # .
            # . . # #
            # # # # .
            `)
    }
})
