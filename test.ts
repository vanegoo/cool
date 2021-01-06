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
  
}
