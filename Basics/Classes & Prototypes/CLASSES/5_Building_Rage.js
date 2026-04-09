// Goal: Extend takeDamage
// Add a method takeDamage to the Warrior class that will increment rage by 1 each time the warrior takes damage.

// It should also invoke takeDamage method on Hero which will inflict the damage on the hero's health.
// const warrior = new Warrior();
// console.log(warrior.health, warrior.rage); // 50, 0
// warrior.takeDamage(10);
// console.log(warrior.health, warrior.rage); // 40, 1
// Be sure to pass the damage argument into the super.takeDamage call!



const Hero = require('./Hero');

class Warrior extends Hero {
    constructor(health) {
        // super(health) le garda Hero class ko constructor ma value jancha
        super(health);
        // rage property default 0 nai hunchha
        this.rage = 0;
    }
    takeDamage(damage) {
        // super.takeDamage use garera Hero ko health ghataune
        super.takeDamage(damage);
        // Warrior ko rage badhaune
        this.rage += 1;
    }
}

module.exports = Warrior;