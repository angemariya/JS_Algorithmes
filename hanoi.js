function hanoiTower(n, first, second, target) {
    if (n > 0) {    
      
      hanoiTower(n - 1, first, target, second); 
      target.push(first.pop());
        console.log(`Move disk ${n} from ${first} to ${target}`);
       hanoiTower(n - 1, second, first, target);
       }
      } 

const tower = [3, 2, 1];
const firstPole = tower;
const secondPole = [];
const thirdPole = [];
hanoiTower(tower.length, firstPole, secondPole, thirdPole);
console.log(`Sorted tower: ${thirdPole}`); // [ 3, 2, 1]