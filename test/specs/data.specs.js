(function() {
    'use strict';

    var expect = chai.expect;

    describe('Animal constructor', function (){
        it('Should be a function', function () {
            expect(Animal).to.be.a('function');
        })
        it('Should be a constructor', function (){
            expect(Animal).to.be.an.instanceof('constructor');
        })
    });

    describe
}());
