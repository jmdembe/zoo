(function() {
    'use strict';

    window.zoo = window.zoo || {};

    function zooError() {
        try {
            window.zoo.Animal(7, 2007)
            console.log('Will this happen?');
        } catch (e) {
            console.log('I hope I caught this!');
        } finally {
          console.log("I do what I want!");
        }


    }

}());
