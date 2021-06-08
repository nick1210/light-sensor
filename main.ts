led.enable(false)
basic.forever(function () {
    if (SmartCity.read_motion_sensor(AnalogPin.P0) == true) {
        SmartCity.turn_white_led(1023, AnalogPin.P3)
        basic.pause(10000)
    } else {
        SmartCity.turn_white_led(0, AnalogPin.P3)
    }
})
