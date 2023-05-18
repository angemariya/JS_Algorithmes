class Cat {
    constructor(
        numberOfPaws,
        numberOfHead,
        numberOfTails,
        race,
        species
    ) {
        this.numberOfPaws = numberOfPaws;
        this.numberOfHead = numberOfHead;
        this.numberOfTails = numberOfTails;
        this.color = "Black";
        this.race = race;
        this.species = species;
    }

    dropCupFroTable() {
        console.log("Pow!!!")
    };
    sayMew(situation) {
        console.log("meow x" + this.numberOfHead)
    };
    sleep(){};
    hunt(){};
    sleepButNot(){};
    tigidik(){};
}

let vasya = new Cat(4, 3, 19, "vasyan", "catButNot");
let boris = new Cat(4, 1, 1, "red", "homeCat", "withStripes");
boris.dropCupFroTable();
boris.sayMew();
vasya.sayMew();