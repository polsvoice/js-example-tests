var expect = require("chai").expect;
var jsTest = require("../index.js");

describe("Basic String and Math Operations", function(){
    it("puts two strings together", function(){
        let a = "He was one";
        let b = "among many.";
        expect(jsTest.combine(a, b)).to.equal("He was one among many.");
    });
    
    it("adds two numbers together", function(){
        let a = 1;
        let b = 2;
        expect(jsTest.combine(a, b)).to.equal(3);
    });
    
    it("rounds decimal numbers", function(){
        let a = 2.1416;
        let b = 1.716;
        expect(jsTest.combine(a, b)).to.equal(4);
    });
});

describe("Array Operations", function(){
    it("returns an array", function(){
        expect(jsTest.list()).to.be.an("Array");
    });
});
