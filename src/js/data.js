(function() {
    'use strict';

    window.zoo = window.zoo || {};
    window.zoo.Animal = Animal;
    window.zoo.RedPanda = RedPanda;
    window.zoo.climb = RedPanda.climb;

    /**
     * Creates a new animal constructor
     * @param {Object} species Constructs animals in the zoo
     */
    function Animal(name, dob) {
        console.log('Which animal is this?', name);

        if(typeof(dob)!=='number') {
            var e = new TypeError('I need a number for date of birth!');
            e.userMessage = 'OOPS!'
            throw e;
        }
        this.name = name || 'anon';
        this.dob = dob || 2016;

    }

    Animal.prototype.whatAmI = function whatAmI () {
        console.log('I am a '+ this.species);
    }

    /**
     * Creates a new red panda
     * @param {String} name This is the name of the Red Panda
     * @param {Number} dob  This is when the Red Panda was born
     */
    function RedPanda(name, dob) {
        Animal.apply(this, [name, dob]);
    }
    RedPanda.prototype = Object.create(Animal.prototype);
    RedPanda.prototype.constructor = RedPanda;

    RedPanda.prototype.birth = function birth(name) {
        return new RedPanda(name);
    }


    RedPanda.climb = function climb(text) {

      if (typeof(text)!=='string') {
          var err = new TypeError('You need to say something for the Red Panda to do thing!');
          err.userMessage = 'The Red Panda is not moving because you did not say anything';
          throw err;
      }
      return 'Oh no, the panda just climbed away!';
    };

    /**
     * Creates a new cheetah
     * @param {String} name Names the cheetah
     * @param {Number} dob Provides the date of birth for the cheetah
     */
    function Cheetah(name, dob) {
        Animal.apply(this, [name, dob]);
    }
    Cheetah.prototype = Object.create(Animal.prototype);
    Cheetah.prototype.constructor = Cheetah;

    Cheetah.prototype.birth = function birth(name) {
        return new Cheetah(name);
    }

    /**
     * Function makes the cheetah run
     * @param  {Number} speed details how fast the cheetah is running
     * @return {String}  Returns a statement about how fast the cheetah is running
     */
    Cheetah.run = function run(speed) {
        if(typeof(speed)!=='number') {
            var oops = new TypeError('I did not get a speed for the cheetah');
            oops.userMessage = 'Is the cheetah not moving or did you not give me any speed?'
            throw oops;
        }

        return 'The cheetah is running at '+ speed +' miles per hour.'
    }

    // RedPanda.prototype.birthday = function birthday() {
    //
    // }
    var exhibit1 = new Animal('Fluffy', 1990);
    var ogPanda = new RedPanda('Fluffy', 2001, true);
    var ogCheetah= new Cheetah('Spots', 2007, false);
    var babyPanda= ogPanda.birth('Red');
    var babyCheetah = ogCheetah.birth('Prints');
    var what = RedPanda.climb('hi!');

    console.log(exhibit1);
    console.log(ogPanda);
    console.log(ogCheetah);
    console.log(babyCheetah);
    console.log(babyPanda);
    console.log(babyCheetah);
    console.log(what);

}());
