(function() {
    'use strict';

    var expect = chai.expect;


    describe('Animal constructor', function () {
        it('Should be a function', function () {
            expect(window.zoo.Animal).to.be.a('function');
        })
        it('Should create an animal', function (){
            var fluffy = new window.zoo.Animal('Fluffy', 2000);
            expect(fluffy).to.be.an.instanceof(window.zoo.Animal);
        })

        it('The name argument should be a string', function () {
            var spots = new window.zoo.Animal('Spots', 2000);
            expect(spots.name).to.be.a('String');
        })

        it('The dob argument should be a number', function (){
            var ace = new window.zoo.Animal('Ace', 2008);
            expect(ace.dob).to.be.a('Number');
        })
    });

    describe
}());
