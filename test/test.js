var expect = require("chai").expect;
var jsTest = require("../index.js");

describe("Basic String and Math Operations", function(){
    it("puts two strings together", function(){
        let a = "He was one";
        let b = "among many";
        expect(concatStrings(a, b)).to.equal("He was one among many.");
    });
});
