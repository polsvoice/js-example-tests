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
        expect(jsTest.list(1, 7, 0, 2)).to.be.false;
    });
    it("doesn't accept numbers anywhere in the list", () => {
        expect(jsTest.list("arain", 2, "attercop")).to.be.false;
    });
    it("doesn't accept other non-string values", () => {
        expect(jsTest.list(undefined, "evil goose")).to.be.false;
        expect(jsTest.list(NaN, "evil goose")).to.be.false;
        expect(jsTest.list(false, "evil goose")).to.be.false;
        expect(jsTest.list([],"evil goose")).to.be.false;
    });
    it("appends to an array", () => {
        expect(jsTest.append("ex", "falso")).to.deep.equal(["ex", "falso"]);
        expect(jsTest.append("quod", "libet")).to.deep.equal(["ex", "falso", "quod", "libet"]);
    });
});

describe("Object Operations", () => {
    it("counts the number of times each letter appears in a sentence", () => {
        expect(jsTest.letterCounter("Superior Cyberwalls")).to.include({s:2, u:1, p:1, e:2, r:3, i:1, o:1, c:1, y:1, b:1, w:1, a:1, l:2});
        expect(jsTest.letterCounter("Stimhack")).to.include({s:1, t:1, i:1, m:1, h:1, a:1, c:1, k:1});
        expect(jsTest.letterCounter("Az McCaffrey: Mechanical Prodigy")).to.include({a:4, z:1, m:2, c:4, f:2, r:2, e:2, y:2, h:1, n:1, i:2, l:1, p:1, o:1, g:1});
    });
    it("calculates the average", () => {
        let intelligence = [
            {
                iq: 76,
                name: "Fred"
            },
            {
                iq: 80,
                name: "Barney"
            },
            {
                iq: 108,
                name: "Wilma"
            },
        ];
        let income = [
            {
                amount: 72,
                source: "eBay"
            },
            {
                amount: 3500,
                source: "job"
            },
            {
                amount: 200,
                source: "GoFundMe"
            }
        ];
        expect(jsTest.average(intelligence, "iq")).to.equal(88);
        expect(jsTest.average(income, "amount")).to.equal(1257);
    });
    it("calculates the average and ignores objects without an amount", () => {
        let cardStats = [
            {
                name: "Accelerated Beta Test"
            },
            {
                name: "Accelerated Diagnostics",
                influence: 1
            },
            {
                name: "Adonis Campaign",
                influence: 2
            },
            {
                name: "Advanced Assembly Lines",
                influence: 2
            }
        ];
        expect(jsTest.average(cardStats, "influence")).to.equal(2);
    });
});
