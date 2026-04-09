// Goal: Extend Hero
// In the new file, Warrior.js, modify the Warrior to extend the Hero class.

// No need to add anything to Warrior just yet, simply extend the class for now!



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