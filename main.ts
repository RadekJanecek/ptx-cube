let x = 0
let kostka = 6
basic.forever(function steny() {
    if (input.logoIsPressed()) {
        
        basic.showString("STENY:")
        if (kostka == 10) {
            basic.showNumber(6)
            kostka = 6
        } else {
            basic.showNumber(10)
            kostka = 10
        }
        
    }
    
})
basic.forever(function on_forever() {
    
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Yes)
        x = 1
    }
    
})
basic.forever(function on_forever2() {
    let hod: number;
    
    if (x == 1) {
        if (input.isGesture(Gesture.Shake)) {
            hod = randint(1, kostka)
            x = 0
            if (hod == 1) {
                basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .`)
            }
            
            if (hod == 2) {
                basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . #`)
            }
            
            if (hod == 3) {
                basic.showLeds(`
            # . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . #`)
            }
            
            if (hod == 4) {
                basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #`)
            }
            
            if (hod == 5) {
                basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #`)
            }
            
            if (hod == 6) {
                basic.showLeds(`
            # . . . #
            . . . . .
            # . . . #
            . . . . .
            # . . . #`)
            }
            
            if (hod == 7) {
                basic.showLeds(`
            # . . . #
            . . . . .
            # . # . #
            . . . . .
            # . . . #`)
            }
            
            if (hod == 8) {
                basic.showLeds(`
            # . . . #
            . . # . .
            . # . # .
            . . # . .
            # . . . #`)
            }
            
            if (hod == 9) {
                basic.showLeds(`
            # . . . #
            . . # . .
            . # # # .
            . . # . .
            # . . . #`)
            }
            
            if (hod == 10) {
                basic.showLeds(`
            # . . . #
            . # . # .
            # . . . #
            . # . # .
            # . . . #`)
            }
            
            for (let i = 0; i < hod; i++) {
                music.playTone(Note.C, music.beat(4))
                music.rest(music.beat(2))
            }
        }
        
    }
    
})
