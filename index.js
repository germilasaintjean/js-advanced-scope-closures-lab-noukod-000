driverId = 0;
class Driver{
  constructor(name, time){
    this.id = ++driverId;
    this.name = name;
  }
}
const d = new Driver();