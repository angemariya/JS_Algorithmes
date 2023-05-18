class Changer {
    constructor(coins) {
        this.coins = coins.sort((a, b) => b - a);
    }

    changeMoney(amount) {
        const change = [];
        const sum = amount;
        this.coins.forEach(el => {
            while (el <= amount) {
                change.push(el);
                amount -= el;
            }
        });
        const sumOfChange = change.reduce((acc, el) => acc + el, 0);
        if ((sum !== sumOfChange) && amount) {
            return (`Here is your money: ${change}\nI don't have ${sum - sumOfChange} for full exchange`);
        } else if (sumOfChange) {
            return `I can't change this money`
        } else

            return change;
    }
}

const changer = new Changer([2, 5, 10]);

console.log(changer.changeMoney(23));
console.log(changer.changeMoney(100));
console.log(changer.changeMoney(-100));