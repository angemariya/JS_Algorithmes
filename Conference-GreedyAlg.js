class Activity {
    constructor(start, end) {
      this.start = start;
      this.end = end;
    }
  
    getCost() {
      if (this.start < 13 && this.end <= 13) {
        return 1;
      } else if (this.start < 13 && this.end > 13) {
        return 2;
      } else {
        return 2;
      }
    }
  
    getDuration() {
      return Math.min(this.end, 17) - this.start;
    }
  }
  
  class ConferenceRoom {
    constructor() {
      this.activities = [];
    }
  
    addActivity(activity) {
      this.activities.push(activity);
    }
  
    calculateMaxBenefit() {
      this.activities.sort((a, b) => a.start - b.start);
  
      let maxBenefit = 0;
      let currentEnd = 9;
  
      for (const activity of this.activities) {
        if (activity.start > currentEnd) {
          const gap = activity.start - currentEnd;
          const cost = currentEnd < 13 ? 1 : 2;
          maxBenefit += cost * gap;
        }
  
        const duration = activity.getDuration();
        const cost = activity.getCost();
        maxBenefit += cost * duration;
  
        currentEnd = activity.end;
      }
  
      if (currentEnd < 17) {
        const gap = 17 - currentEnd;
        const cost = currentEnd < 13 ? 1 : 2;
        maxBenefit += cost * gap;
      }
  
      return maxBenefit;
    }
  }
  

  const room = new ConferenceRoom();
  
  room.addActivity(new Activity(10, 12)); // Активность с 10:00 до 12:00
  room.addActivity(new Activity(11, 14)); // Активность с 11:00 до 14:00
  room.addActivity(new Activity(12, 16)); // Активность с 12:00 до 16:00
  room.addActivity(new Activity(14, 15)); // Активность с 14:00 до 15:00
  
  const maxBenefit = room.calculateMaxBenefit();
  console.log('Максимальная выгода:', maxBenefit); // Выводит "Максимальная выгода: 7"
  