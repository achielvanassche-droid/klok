let AlarmInstel = 0
let AlarmMinuut = 0
let AlarmUur = 0
let Min = 0
let Uur = 0
let haloDisplay2: kitronik_halo_hd.ZIPHaloHd = null
let haloDisplay: kitronik_halo_hd.ZIPHaloHd = null
let Sec = 0
let haloDisplay3: kitronik_halo_hd.ZIPHaloHd = null
let haloDisplay5: kitronik_halo_hd.ZIPHaloHd = null
let haloDisplay4: kitronik_halo_hd.ZIPHaloHd = null
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (AlarmInstel != 1) {
        AlarmMinuut = 0
        AlarmUur = 0
    }
})
input.onButtonPressed(Button.A, function () {
    if (AlarmInstel == 1) {
        AlarmMinuut += 1
    }
    if (AlarmInstel == 0 || AlarmInstel == 2) {
        Min += 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (AlarmInstel == 1) {
        AlarmUur += 5
    }
    if (AlarmInstel == 0 || AlarmInstel == 2) {
        Uur += 5
    }
})
basic.forever(function () {
    if (AlarmInstel == 0 || AlarmInstel == 2) {
        if (Uur != Min) {
            haloDisplay2 = kitronik_halo_hd.createZIPHaloDisplay(60)
            haloDisplay2.setZipLedColor(Min, kitronik_halo_hd.colors(ZipLedColors.Green))
            haloDisplay2.show()
        }
    }
})
basic.forever(function () {
    if (AlarmInstel == 0 || AlarmInstel == 2) {
        haloDisplay = kitronik_halo_hd.createZIPHaloDisplay(60)
        haloDisplay.setZipLedColor(Sec, kitronik_halo_hd.colors(ZipLedColors.Red))
        if (Sec != Min && Sec != Uur) {
            haloDisplay.show()
        }
    }
})
basic.forever(function () {
    if (AlarmInstel == 0 || AlarmInstel == 2) {
        haloDisplay3 = kitronik_halo_hd.createZIPHaloDisplay(60)
        haloDisplay3.setZipLedColor(Uur, kitronik_halo_hd.colors(ZipLedColors.Blue))
        haloDisplay3.show()
    }
})
basic.forever(function () {
    Sec += 1
    basic.pause(999)
})
basic.forever(function () {
    if (AlarmInstel == 0 || AlarmInstel == 2) {
        if (input.logoIsPressed()) {
            basic.pause(500)
            AlarmInstel = 1
            basic.showString("Stel In")
        }
    }
    if (AlarmInstel == 1) {
        if (input.logoIsPressed()) {
            basic.pause(500)
            AlarmInstel = 2
        }
    }
    if (AlarmInstel == 2) {
        if (AlarmMinuut == Min && AlarmUur == Uur) {
            music.play(music.createSoundExpression(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        }
    }
})
basic.forever(function () {
    if (Sec == 60) {
        Sec = 0
        Min += 1
    }
    if (Min == 60) {
        Min = 0
        Uur += 5
    }
    if (Uur == 60) {
        Uur = 0
    }
    if (AlarmMinuut == 60) {
        AlarmMinuut = 0
    }
    if (AlarmUur == 60) {
        AlarmUur = 0
    }
})
basic.forever(function () {
    if (AlarmInstel == 1) {
        haloDisplay5 = kitronik_halo_hd.createZIPHaloDisplay(60)
        haloDisplay5.setZipLedColor(AlarmUur, kitronik_halo_hd.colors(ZipLedColors.Blue))
        haloDisplay5.show()
        if (AlarmMinuut != AlarmUur) {
            haloDisplay4 = kitronik_halo_hd.createZIPHaloDisplay(60)
            haloDisplay4.setZipLedColor(AlarmMinuut, kitronik_halo_hd.colors(ZipLedColors.Green))
            haloDisplay4.show()
        }
    }
})
