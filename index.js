driverId = 0;
class Driver{
  constructor(name, time){
    this.id = ++driverId;
    this.name = name;
  }
  createDriver(driver){
    return driver * this.name;
  }
}
