// Goal: Take Damage method
// Add a method takeDamage to the hero class. This method should take one number argument representing the damage. This number should be directly subtracted from the hero's health.

// For example:
// const hero = new Hero();
// console.log(hero.health); // 50
// hero.takeDamage(5);
// console.log(hero.health); // 45


class Hero {
    constructor() {
        // Goal anusaar health lai 50 ma set garne
        this.health = 50;
    }
    // takeDamage method jasle 'damage' argument lincha
    takeDamage(damage) {
        // Damage lai health bata subtract (minus) garne
        this.health -= damage;
    }
}

module.exports = Hero;