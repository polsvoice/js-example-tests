let myArray = [];
exports.myArray = myArray;

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
            return null;
        }
    }
    return args;
};

exports.append = (...args) => {
    args.forEach((x) => myArray.push(x));
    return myArray;
};
