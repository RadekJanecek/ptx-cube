x = 0
kostka = 6
def steny():
    if input.logo_is_pressed():
        global kostka
        basic.show_string("STENY:")
        if kostka == 10:
            basic.show_number(6)
            kostka = 6
        else:
            basic.show_number(10)
            kostka = 10
basic.forever(steny)
def on_forever():
    global x
    if input.button_is_pressed(Button.A):
        basic.show_icon(IconNames.YES)
        x = 1
basic.forever(on_forever)
def on_forever2():  
    global x
    if x == 1:
        if input.is_gesture(Gesture.SHAKE):
            hod = randint(1, kostka)
            x = 0
            if hod == 1: basic.show_leds("""
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .""")
            if hod == 2: basic.show_leds("""
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . #""")
            if hod == 3: basic.show_leds("""
            # . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . #""")
            if hod == 4: basic.show_leds("""
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #""")
            if hod == 5: basic.show_leds("""
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #""")
            if hod == 6: basic.show_leds("""
            # . . . #
            . . . . .
            # . . . #
            . . . . .
            # . . . #""")
            if hod == 7: basic.show_leds("""
            # . . . #
            . . . . .
            # . # . #
            . . . . .
            # . . . #""")
            if hod == 8: basic.show_leds("""
            # . . . #
            . . # . .
            . # . # .
            . . # . .
            # . . . #""")
            if hod == 9: basic.show_leds("""
            # . . . #
            . . # . .
            . # # # .
            . . # . .
            # . . . #""")
            if hod == 10: basic.show_leds("""
            # . . . #
            . # . # .
            # . . . #
            . # . # .
            # . . . #""")
            for i in range(hod):
                music.play_tone(Note.C, music.beat(4))
                music.rest(music.beat(2))
basic.forever(on_forever2)