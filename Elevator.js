class Building {
    constructor(floors, lifts) {
      this.floors = floors;
      this.lifts = lifts;
      this.liftLocations = {};
    }
  
    setLiftLocation(lift, floor) {
      this.liftLocations[lift] = floor;
    }
  
    sendNearestLift(floor) {
      let nearestLift = null;
      let minDistance = Infinity;
  
      for (const lift of this.lifts) {
        const distance = Math.abs(this.liftLocations[lift] - floor);
        if (distance < minDistance) {
          nearestLift = lift;
          minDistance = distance;
        }
      }
  
      console.log(`Отправляем лифт ${nearestLift}`);
    }
  }
  
  const building = new Building(19, ['A', 'B']);

  building.setLiftLocation('A', 0);
  building.setLiftLocation('B', 8);
  building.sendNearestLift(1);
  