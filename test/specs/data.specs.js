(function() {
    'use strict';

    var expect = chai.expect;

    describe('Sanity checks for the application', function (){
        it('Should access the global namespace', function () {
            expect(window.zoo).to.be.an('object');
        });
    });

    describe('Animal constructor', function () {
        it('Should be a function', function () {
            expect(window.zoo.Animal).to.be.a('function');
        });
        it('Should create an animal using a constructors', function (){
            var fluffy = new window.zoo.Animal('Fluffy', 2000);
            expect(fluffy).to.be.an.instanceof(window.zoo.Animal);
        });

        it('The name argument should be a string', function (){
            var spots = new window.zoo.Animal('Spots', 2000);
            expect(spots.name).to.be.a('String');
        });

        it('The dob argument should be a number', function (){
            var ace = new window.zoo.Animal('Ace', 2008);
            expect(ace.dob).to.be.a('Number');
        });

        it('Should throw an error if a string is not received', function (){
            try {
                window.zoo.Animal(0, 7);
            } catch(e) {
                expect(e).to.be.an('object');
                expect(e).to.be.an.instanceof('TypeError');
            }
        })
    });

    describe ('Red Panda Constructor', function () {
        it('Should be a function', function () {
            expect(window.zoo.RedPanda).to.be.a('function');
        });

        it ('Should create a new Red Panda once called', function () {
            var tusa = new window.zoo.RedPanda('Tusa', 2015);
            expect(tusa).to.be.an.instanceof(window.zoo.RedPanda);
        });

        it ('The name argument should be a string', function (){
            var asa = new window.zoo.RedPanda('Asa', 2014);
            expect(asa.name).to.be.a('String');
        });

        it ('The dob argument should be a number', function () {
            var red = new window.zoo.RedPanda('Red', 2013);
            expect(red.dob).to.be.a('Number')
        })

        it ('The Red Panda should return a string as an argument', function () {
            try {
                window.zoo.RedPanda.climb(1);
            } catch(err) {
                expect(err).to.be.an.instanceof(Object);
                expect(err).to.be.an.instanceof(TypeError);
            }
        });

    });

    describe('Cheetah constructor', function () {
        it ('Should take a number as an argument so that the cheetah can run', function () {

        })
    });
}());
