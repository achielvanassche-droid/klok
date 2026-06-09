let Min = 0
let Uur = 0
let Sec = 0
let haloDisplay: kitronik_halo_hd.ZIPHaloHd = null
let haloDisplay3: kitronik_halo_hd.ZIPHaloHd = null
let haloDisplay2: kitronik_halo_hd.ZIPHaloHd = null
input.onButtonPressed(Button.A, function () {
    Min += 1
})
input.onButtonPressed(Button.B, function () {
    Uur += 5
})
basic.forever(function () {
    Sec += 1
    basic.pause(1000)
})
basic.forever(function () {
    haloDisplay = kitronik_halo_hd.createZIPHaloDisplay(60)
    haloDisplay.setZipLedColor(Sec, kitronik_halo_hd.colors(ZipLedColors.Red))
    if (Sec != Min && Sec != Uur) {
        haloDisplay.show()
    }
})
basic.forever(function () {
    haloDisplay3 = kitronik_halo_hd.createZIPHaloDisplay(60)
    haloDisplay3.setZipLedColor(Uur, kitronik_halo_hd.colors(ZipLedColors.Yellow))
    haloDisplay3.show()
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
})
basic.forever(function () {
    if (Uur != Min) {
        haloDisplay2 = kitronik_halo_hd.createZIPHaloDisplay(60)
        haloDisplay2.setZipLedColor(Min, kitronik_halo_hd.colors(ZipLedColors.Green))
        haloDisplay2.show()
    }
})
