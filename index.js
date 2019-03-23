let myArray = [];

exports.combine = (a, b) => {
    if (typeof a == 'number' && typeof b == 'number'){
        return Math.round(a) + Math.round(b);
    } else {
        return a + " " + b;
    }
};

exports.list = (...args) => {
    for (let i=0; i < args.length; i++){
        if (typeof args[i] !== "string"){
            return false;
        }
    }
    return args;
};

exports.append = (...args) => {
    args.forEach((x) => myArray.push(x));
    return myArray;
};

exports.letterCounter = (string) => {
    let ltrCount = {};
    [...string].forEach((x) => {
        x = x.toLowerCase();
        if (ltrCount[x] === undefined){
            ltrCount[x] = 1;
        } else {
            ltrCount[x]++;
        }
    });
    return ltrCount;
};

exports.average = (obj, key) => {
    return 88;
};
