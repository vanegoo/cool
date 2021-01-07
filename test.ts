{
  // motor test
  Coolguy_basic.exter_motor_drive(motor_ports.J7, 255, motor_dir.FWD)
  Coolguy_basic.exter_motor_drive(motor_ports.J8, 255, motor_dir.FWD)
  basic.pause(1000)
  Coolguy_basic.exter_motor_drive(motor_ports.J7, 127, motor_dir.FWD)
  Coolguy_basic.exter_motor_drive(motor_ports.J8, 127, motor_dir.FWD)
  basic.pause(1000)
  Coolguy_basic.exter_motor_drive(motor_ports.J7, 255, motor_dir.REV)
  Coolguy_basic.exter_motor_drive(motor_ports.J8, 255, motor_dir.REV)
  basic.pause(1000)
  Coolguy_basic.exter_motor_drive(motor_ports.J7, 127, motor_dir.REV)
  Coolguy_basic.exter_motor_drive(motor_ports.J8, 127, motor_dir.REV)
  basic.pause(1000)
  
  // next
  
  // Digital tube test
  Coolguy_basic.Segment_Init(exter_ports1.J5)
  basic.forever(function () {
  Coolguy_basic.coolguy_Set_Segment2(6, 3)
  })
  Coolguy_basic.Segment_Init(exter_ports1.J5)
  basic.forever(function () {
  Coolguy_basic.coolguy_Set_Segment(8)
  })
  
  // next
  
  // RGB test
  Coolguy_basic.coolguy_WS2812_Init(servo_ports.J2)
  basic.forever(function () {
  Coolguy_basic.coolguy_WS2812_SetRGB(255, 0, 0, 255)
  })
  Coolguy_basic.coolguy_WS2812_Init(servo_ports.J2)
  basic.forever(function () {
  Coolguy_basic.coolguy_WS2812_SetRGB(255, 0, 255, 0)
  })
  Coolguy_basic.coolguy_WS2812_Init(servo_ports.J2)
  basic.forever(function () {
  Coolguy_basic.coolguy_WS2812_SetRGB(255, 255, 0, 0)
  }) 
    
  // next
  
  // Infrared remote control test
  Coolguy_basic.coolguy_IR_Init(exter_ports.J2)
  basic.showIcon(IconNames.Heart)
  basic.forever(function () {
  Coolguy_basic.coolguy_IR_check()
  })
  basic.forever(function () {
  if (Coolguy_basic.coolguy_IR_KeyValueCmp(1, remote_key.Up) == 1) {
  basic.showIcon(IconNames.Yes)
  }
  })
    
  // next
  
  // Ultrasonic test
  Coolguy_basic.ultrasonic_Init(exter_ports1.J5)
  basic.forever(function () {
  basic.showNumber(Coolguy_basic.ultrasonic_get())
  basic.pause(500)
  })  
  
  // next
  
  // Steering gear test
  input.onButtonPressed(Button.A, function () {
  Coolguy_basic.servo_control(servo_ports.J2, 90)
  })
  Coolguy_basic.servo_control(servo_ports.J2, 0)
    
  // next
  
  // AI module test
  Coolguy_advan.SoundSensor_SetPort(exter_ports2.J5)
  Coolguy_advan.SoundSensor_SetWiFi("CoolGuyRobot", "robotrobot")
  Coolguy_advan.SoundSensor_WaitInit()
  Coolguy_advan.SoundSensor_SetMode(SoundSensor_Mode.MODE_DIA)
  basic.forever(function () {
  Coolguy_advan.SoundSensor_Vocice_conversation(pins.digitalReadPin(DigitalPin.P1))
  })
      
  // next
  
  // Multi-channel voice test
  Coolguy_advan.wtr050_Init(exter_ports3.J2)
  Coolguy_advan.wtr050_recordstart(1)
  basic.pause(2000)
  Coolguy_advan.wtr050_recordstop()
  basic.showIcon(IconNames.Heart)
  basic.forever(function () {
  Coolguy_advan.wtr050_playvoice(1)
  basic.pause(2000)
  Coolguy_advan.wtr050_stopvoice()
  })
        
  // next
  
  // WIFI module test
  Coolguy_advan.iCloudMemory_Serial_Init(exter_ports2.J5)
  Coolguy_advan.SoundSensor_SetWiFi("CoolGuyRobot", "robotrobot")
  basic.showIcon(IconNames.Heart)
  basic.forever(function () {
  basic.showString(serial.readString())
  })
          
  // next
  
  // camera module test
  Coolguy_advan.VisionSensor_Begin(exter_ports2.J5, VisionSensor_Mode.CARD)
  basic.showIcon(IconNames.Heart)
  basic.forever(function () {
  if (Coolguy_advan.VisionSensor_Detected1(VisionDetect_Others.FACE)) {
  basic.showIcon(IconNames.Yes)
  }
  })
}
