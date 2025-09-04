basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P1)) {
        basic.showIcon(IconNames.Yes)
    } else if (false) {
        basic.showIcon(IconNames.No)
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
        servos.P2.setAngle(180)
        basic.pause(1000)
    }
})
