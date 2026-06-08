let haloDisplay: kitronik_halo_hd.ZIPHaloHd = null
let Sec = 0
basic.forever(function () {
    haloDisplay = kitronik_halo_hd.createZIPHaloDisplay(60)
    haloDisplay.setZipLedColor(Sec, kitronik_halo_hd.colors(ZipLedColors.Red))
    haloDisplay.show()
    basic.pause(1000)
    Sec += 1
})
