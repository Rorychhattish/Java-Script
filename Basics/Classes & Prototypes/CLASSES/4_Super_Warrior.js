//  Goal: Add Rage
// Add a rage property to the Warrior. The value of rage will start at 0.
// const warrior = new Warrior();
// console.log(warrior.rage); // 0


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