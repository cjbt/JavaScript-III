/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/

function GameObject(gameAttributes){
  this.createdAt = gameAttributes.createdAt;
  this.dimensions = gameAttributes.dimensions;
}
GameObject.prototype.destroy = function(){return `Object was removed from the game`};
/*
  === CharacterStats ===
  * healthPoints
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(CharStatAttributes){
  this.healthPoints = CharStatAttributes.healthPoints;
  this.name = CharStatAttributes.name;
  GameObject.call(this, CharStatAttributes);
}
CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function(){return `${this.name} took damage.`};


/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

function Humanoid(humanoidAttributes){
  this.team = humanoidAttributes.team;
  this.weapons = humanoidAttributes.weapons;
  this.language = humanoidAttributes.language;
  this.score = humanoidAttributes.score;
  this.fgm = humanoidAttributes.fgm;
  this.fga = humanoidAttributes.fga;
  CharacterStats.call(this, humanoidAttributes);
}
Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function(){return `${this.name} offers a greeting in ${this.language}.`};

 
/*
  * Inheritance chain: GameObject -> CåharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  // console.log(mage.createdAt); // Today's date
  // console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  // console.log(swordsman.healthPoints); // 15
  // console.log(mage.name); // Bruce
  // console.log(swordsman.team); // The Round Table
  // console.log(mage.weapons); // Staff of Shamalama
  // console.log(archer.language); // Elvish
  // console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  // console.log(mage.takeDamage()); // Bruce took damage.
  // console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!

  // parent
  function Villain(villainAttributes) {
    Humanoid.call(this, villainAttributes);
  }
  Villain.prototype = Object.create(Humanoid.prototype);
  
  Villain.prototype.flopAndOne = function(){
    if (Math.floor(Math.random()*10) +1 < 6) {
      this.score += 2;
      document.getElementById("playbyplay").innerHTML = `<p>*Whistles* Harden down the lane and flails to the ground DRAMATICALLY while being far away from his opponents. Knocks down 2 free throws.</p>`
      document.getElementById("hardenscore").innerHTML = this.score;
      // increases field goal made in play by play
      this.fgm++;
      document.getElementById("beardfgm").innerHTML = this.fgm;

      // increases field goal attempts in play by play
      this.fga++;
      document.getElementById("beardfga").innerHTML = this.fga;

    } else {
      document.getElementById("playbyplay").innerHTML = `<p style="color: red;">Harden just did not sell his flop very well.</p>`

     // does not increase fga due to nba rules
    }
  };
  Villain.prototype.stepBackCrossoverJumber = function(){
    if (Math.floor(Math.random()*10) +1 < 6) {
      this.score += 3;
      document.getElementById("playbyplay").innerHTML = `<p>Iso Harden with the step back three!</p>`
      document.getElementById("hardenscore").innerHTML = this.score;

      // increases field goal made in play by play
      this.fgm++;
      document.getElementById("beardfgm").innerHTML = this.fgm;

      // increases field goal attempts in play by play
      this.fga++;
      document.getElementById("beardfga").innerHTML = this.fga;
    } else {
      document.getElementById("playbyplay").innerHTML = `<p style="color: red;">Harden turns the ball over! </p>`
      
      // increases field goal attempts in play by play
      this.fga++;
      document.getElementById("beardfga").innerHTML = this.fga;

      
    }
  };
  Villain.prototype.tomohawkDunk = function(){
    if (Math.floor(Math.random()*10) +1 < 6) {
      this.score += 3;
      document.getElementById("playbyplay").innerHTML = `<p>Harden breaks away and slams it with a Tomohawk DUNK AND ONE! 3 points!</p>`
      document.getElementById("hardenscore").innerHTML = this.score;

      // increases field goal made in play by play
      this.fgm++;
      document.getElementById("beardfgm").innerHTML = this.fgm;

      // increases field goal attempts in play by play
      this.fga++;
      document.getElementById("beardfga").innerHTML = this.fga;
    } else {
      document.getElementById("playbyplay").innerHTML = `<p style="color: red;">Harden gets BLOCKED!</p>`

      // increases field goal attempts in play by play
      this.fga++;
      document.getElementById("beardfga").innerHTML = this.fga;
    }
  };
  
  function Hero(heroAttributes) {
    Humanoid.call(this, heroAttributes);
  }
  Hero.prototype = Object.create(Humanoid.prototype);

  Hero.prototype.pullUpFromHalfCourt = function(){
    if (Math.floor(Math.random()*10) +1 < 6){
      this.score += 3;
      document.getElementById("playbyplay").innerHTML = `<p>Curry, walking pass half-court... Shoots out of nowhere and scores! 3 points!</p>`
      document.getElementById("curryscore").innerHTML = this.score;

      // increases field goal made in play by play
      this.fgm++;
      document.getElementById("stephfgm").innerHTML = this.fgm;

      // increases field goal attempts in play by play
      this.fga++;
      document.getElementById("stephfga").innerHTML = this.fga;
    } else {
      document.getElementById("playbyplay").innerHTML = `<p style="color: red;">Not a good look, it was a bad shot.</p>`

      // increases field goal attempts in play by play
      this.fga++;
      document.getElementById("stephfga").innerHTML = this.fga;
    }
  };
  Hero.prototype.stepBackJumper = function(){
    if (Math.floor(Math.random()*10) +1 < 6){
      this.score += 3;
      document.getElementById("playbyplay").innerHTML = `<p>Step back jumper... GOOD! AND ONE! 3 points! </p>`
      document.getElementById("curryscore").innerHTML = this.score;

      // increases field goal made in play by play
      this.fgm++;
      document.getElementById("stephfgm").innerHTML = this.fgm;

      // increases field goal attempts in play by play
      this.fga++;
      document.getElementById("stephfga").innerHTML = this.fga;
    } else {
      document.getElementById("playbyplay").innerHTML = `<p style="color: red;">Curry shoots, and no good. </p>`

      // increases field goal attempts in play by play
      this.fga++;
      document.getElementById("stephfga").innerHTML = this.fga;
    }
  };
  Hero.prototype.floater = function(){
    if (Math.floor(Math.random()*10) +1 < 6) {
      this.score += 2;
      document.getElementById("playbyplay").innerHTML = `<p>Curry the Chef, cookin then lays it in! 2 points!</p>`;
      document.getElementById("curryscore").innerHTML = this.score;

      // increases field goal made in play by play
      this.fgm++;
      document.getElementById("stephfgm").innerHTML = this.fgm;

      // increases field goal attempts in play by play
      this.fga++;
      document.getElementById("stephfga").innerHTML = this.fga;
    } else {
      document.getElementById("playbyplay").innerHTML = `<p style="color: red;">Curry gets blocked!</p>`;

      // increases field goal attempts in play by play
      this.fga++;
      document.getElementById("stephfga").innerHTML = this.fga;
    }
  };
  
  // child

  const theBeard = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    score: 0,
    fgm: 0,
    fga: 0,
    name: 'James Harden',
    team: 'Houston Rockets',
    weapons: [
      'Step Back Crossover Jumper',
    ],
    language: 'Common Tongue',
  });

  const chefCurry = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 1,
    },
    score: 0,
    fgm: 0,
    fga: 0,
    name: 'Steph Curry',
    team: 'Golden State Warriors',
    weapons: [
      'Pull Up From Halfcourt',
    ],
    language: 'Common Tongue',
  });