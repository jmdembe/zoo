(function() {
    'use strict';


    /**
     * Creates a new animal constructor
     * @param {Object} species Constructs animals in the zoo
     */
    function Animal(name, dob) {
        console.log('Which animal is this?', name);
        this.name = name || 'anon';
        this.dob = dob;
    }

    Animal.prototype.whatAmI = function whatAmI () {
        console.log('I am a '+ this.species);
    }

    /**
     * Creates a new red panda
     * @param {[type]} name [description]
     */
    function RedPanda(name) {
        this.name = name;
    }

    /**
     * Creates a new cheetah
     * @param {[type]} name [description]
     */
    function Cheetah(name) {
        this.name = name;
    }
    
    var exhibit1 = new Animal('Fluffy', 5);
    var babyPanda = new RedPanda('Fluffy');


}());
