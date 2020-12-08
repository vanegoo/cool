# Coolguy_basic_extension

Coolguy basic extension for Makecode. It's micro:bit extension board, which include basic and advanced functionalities like battery module, two DC motor drivers and 5V IO interfaces. What's more the inteface is RJ11 based, it's easy to connect by students and teachers. It can plug Ultrasonic distance module, RGB module and etc, see below for detail. 

## Feature

- Onboard battery source (powered by 3.7V rechargeable battery)
- Drive two motors simultaneously (motor interface A and B)
- Two IIC communication interfaces (serial interface A and B)
- Three dual IO interfaces（interface P1, P2, and P16）
- A multiplexing IO interface（interface P0）

## Link to product page

http://www.coolguymaker.com/uploads/download/20201208/1318331361b0545.pdf

## Hardware Preview

- ### front

![Product](https://user-images.githubusercontent.com/34023728/99958245-007d8c80-2dc4-11eb-9b37-dc60b6a1a5b9.png)

![back view](https://user-images.githubusercontent.com/34023728/99958253-02dfe680-2dc4-11eb-87b9-5b9311b31110.png)

## Software Preview

### Motor

Using the blocks under ‘Motors’ in Coolguy_basic is the simplest way to drive a motor. In that case, you may specify the port forward or reversal separately. You may also control the little car to move forward, move backward, or turn in the speed level from 0 to 255. The two motors will both drive according to the selected speed level and direction. 

```typescript
// Move forward at speed 60 forever
basic.forever(function () {						
    Coolguy_basic.exter_motor_go(60)				
})
```

![basic_motor1](https://user-images.githubusercontent.com/34023728/101271897-25a9cc00-37c2-11eb-9b09-7c28076c81c6.png)

```typescript
// Move backward at speed 100 forever
basic.forever(function () {						
    Coolguy_basic.exter_motor_back(100)	
})
```

![basic_motor2](https://user-images.githubusercontent.com/34023728/101271898-280c2600-37c2-11eb-9bf3-c926db4e0ff8.png)

#### Stopping

The motor will stop when its speed is set to zero. However, we can also use the motor itself to generate reverse current to brake faster, which helps to perform more precise operations. Use the command `exter_motor_stop(...)` to stop braking or coast to stop.

```typescript
// rapidly brake
basic.forever(function () {		
	Coolguy_basic.exter_motor_stop()
})
```

![basic_motor3](https://user-images.githubusercontent.com/34023728/99958398-4c303600-2dc4-11eb-9ee5-e6c6ff0e5e7a.png)

#### Drive motors separately

If you want to perform finer control on a single motor, please use to drive each motor forward or backward. You may specify the speed level from 0 to 255, and you can select forward and reverse. If the rotation speed of the left motor is slower than the rotation speed of the right motor, the robot will rotate to the left.

```typescript
// Drive one motors forward at speed 60
basic.forever(function () {	
	Coolguy_basic.exter_motor_drive(motor_ports.J7, 60, motor_dir.FWD)
})
```

![basic_motor4](https://user-images.githubusercontent.com/34023728/99958414-4f2b2680-2dc4-11eb-9e76-bae8106c778e.png)

```typescript
// Drive left motor in reverse at speed 30
basic.forever(function () {	
	Coolguy_basic.exter_motor_drive(motor_ports.J7, 30, motor_dir.REV)
})
```

![basic_motor5](https://user-images.githubusercontent.com/34023728/99958422-52bead80-2dc4-11eb-8a6b-a7775c65ff2b.png)



```typescript
// Drive forward in a leftward curve
basic.forever(function () {	
	Coolguy_basic.exter_motor_drive(motor_ports.J7, 100, motor_dir.REV)	
	Coolguy_basic.exter_motor_drive(motor_ports.J8, 130, motor_dir.FWD)
})
```

![basic_motor6](https://user-images.githubusercontent.com/34023728/101271900-2b9fad00-37c2-11eb-82cb-ecae46d163f0.png)

### Beeper

Connect the beeper with analog interface P0, and then the beeper module is available.

```typescript
// Buzz for 100 ms
basic.forever(function () {
	music.playTone(262, music.beat(BeatFraction.Whole))			
	basic.pause(100)
})
```

![basic_beeper](https://user-images.githubusercontent.com/34023728/99958569-931e2b80-2dc4-11eb-9c91-ee6bfc1073a9.png)

### Display digits using the digital tube

A digital tube is provided, which can be used to display expected digits using function `Segment_Init(...)`.

```typescript
// The digital tube shows the number 8
Coolguy_basic.Segment_Init(exter_ports1.J5)				
basic.forever(function () {						
    Coolguy_basic.coolguy_Set_Segment(8)					
})
```

![basic_segment](https://user-images.githubusercontent.com/34023728/99958600-a29d7480-2dc4-11eb-922c-2c3c841291a7.png)

### Ultrasonic distance measure

The extension board provides an ultrasonic sensor so that the distance between the sensor and the barrier can be measured using the function `ultrasonic_get(..)`. 

```typescript
// Read Ultrasonic values
Coolguy_basic.ultrasonic_Init(exter_ports1.J5)				
basic.forever(function () {						
    basic.showNumber(Coolguy_basic.ultrasonic_get())			
})
```

![basic_ultrasonic](https://user-images.githubusercontent.com/34023728/99958636-b0eb9080-2dc4-11eb-85e0-8c322ec71828.png)

### RGB module

RGB module makes it possible to select color and brightness via RGB value. The brightness level is up to 255 with a default value of 120. Do not look directly when the brightness level is high, otherwise, eyes would be damaged. 

```typescript
// Set brightness of RGB to 100 set color blue
Coolguy_basic.coolguy_WS2812_Init(servo_ports.J2)
basic.forever(function () {
    Coolguy_basic.coolguy_WS2812_SetRGB(120, 0, 0, 255)
})
```

![basic_RGB](https://user-images.githubusercontent.com/34023728/99958669-c2349d00-2dc4-11eb-8d41-68e68d1f749e.png)

### Infrared remote control

The infrared remote-control module should have cooperated with the Coolguy remote controller and the infrared receiver. There are 8 channels to be selected, which can prevent channel conflicts. You may use the infrared remote controller to control the little car to move forward or backward.

```typescript
//Control the little car to move using a remote controller
Coolguy_basic.coolguy_IR_Init(exter_ports.J1)
basic.forever(function () {
    Coolguy_basic.coolguy_IR_check()
})
basic.forever(function () {
    if (Coolguy_basic.coolguy_IR_KeyValueCmp(1, remote_key.Up) == 1) {
        Coolguy_basic.exter_motor_go(255)
    } else {
        Coolguy_basic.exter_motor_stop()
    }
})
```

![basic_remote](https://user-images.githubusercontent.com/34023728/99958698-d11b4f80-2dc4-11eb-95f7-77eb5b466696.png)

## License

MIT

## Supported targets

* for PXT/microbit (The metadata above is needed for package search.)

