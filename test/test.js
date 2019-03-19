var expect = require("chai").expect;
var jsTest = require("../index.js");

describe("Basic String and Math Operations", () => {
    it("puts two strings together", () => {
        let a = "He was one";
        let b = "among many.";
        expect(jsTest.combine(a, b)).to.equal("He was one among many.");
    });
    
    it("adds two numbers together", () => {
        let a = 1;
        let b = 2;
        expect(jsTest.combine(a, b)).to.equal(3);
    });
    
    it("rounds decimal numbers", () => {
        let a = 2.1416;
        let b = 1.716;
        expect(jsTest.combine(a, b)).to.equal(4);
    });
});

describe("Array Operations", () => {
    it("returns an array", () => {
        expect(jsTest.list()).to.be.an("Array");
    });
    it("adds items to an array", () => {
        expect(jsTest.list("mochi", "sushi", "nattou")).to.deep.equal(["mochi", "sushi", "nattou"]);
    });
    it("doesn't care about order", () => {
        expect(jsTest.list("mocha", "sushi", "nattou")).to.have.members(["nattou", "sushi", "mocha"]);
    });
    it("doesn't accept numbers", () => {
        expect(jsTest.list(1, 7, 0, 2)).to.be.null;
    });
    it("doesn't accept numbers anywhere in the list", () => {
        expect(jsTest.list("arain", 2, "attercop")).to.be.null;
    });
    it("doesn't accept other non-string values", () => {
        expect(jsTest.list(undefined, "evil goose")).to.be.null;
        expect(jsTest.list(NaN, "evil goose")).to.be.null;
        expect(jsTest.list(false, "evil goose")).to.be.null;
        expect(jsTest.list([],"evil goose")).to.be.null;
    });
    it("appends to an array", () => {
        expect(jsTest.append("ex", "falso")).to.deep.equal(["ex", "falso"]);
        expect(jsTest.append("quod", "libet")).to.deep.equal(["ex", "falso", "quod", "libet"]);
    });
});

describe("Object Operations", () => {
    it("counts the number of times each letter appears in a sentence", () => {
        expect(jsTest.letterCounter("Superior Cyberwalls")).to.include({s:2, u:1, p:1, e:2, r:3, i:1, o:1, c:1, y:1, b:1, w:1, a:1, l:2});
    });
});

