// Goal: Hero Health
// Within your constructor function, add a health property to a hero instance and set it to 50.

// When creating a new hero, it should work like this:
// const hero = new Hero();
// console.log(hero.health); // 50



class Hero {
    constructor(health = 50) {
        this.health =  health;
    }
    takeDamage(damage) {
    this.health -= damage;
    }
}
module.exports = Hero;


const hero = new Hero();
console.log(hero.health); // 50
hero.takeDamage(5);
console.log(hero.health); // Output: 45