led.enable(False)

def on_forever():
    if SmartCity.read_motion_sensor(AnalogPin.P0) == True:
        SmartCity.turn_white_led(1023, AnalogPin.P3)
        basic.pause(10000)
    else:
        SmartCity.turn_white_led(0, AnalogPin.P3)
basic.forever(on_forever)