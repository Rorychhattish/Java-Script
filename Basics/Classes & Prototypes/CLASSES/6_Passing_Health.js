// Configurable Health
// Final Task! Let's make both the Hero and Warrior classes have configurable health.

// When creating a warrior/hero, we'll pass a number which should be stored as their health:
// const warrior1 = new Warrior(50);
// const warrior2 = new Warrior(25);
// const hero1 = new Hero(10);
// console.log(warrior1.health); // 50
// console.log(warrior2.health); // 25
// console.log(hero1.health); // 10
// Arguments that are passed when calling a class with new will be passed directly to the constructor.
// You'll need to change the constructor of both the Hero and Warrior for this one!



const Hero = require('./Hero');

class Warrior extends Hero {
    constructor(health) {
        // 1. Hero class ko constructor lai call garne
        // Bahira bata aayeko 'health' value lai Parent class ma pathaune
        super(health);
        // 2. Warrior-specific property
        this.rage = 0;
    }
    takeDamage(damage) {
        // 3. Parent class ko takeDamage method reuse garne
        super.takeDamage(damage);
        // 4. Warrior hit khada rage 1 le badhchha
        this.rage += 1;
    }
}

module.exports = Warrior;