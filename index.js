exports.combine = function(a, b){
    if (typeof a == 'number' && typeof b == 'number'){
        return Math.round(a) + Math.round(b);
    } else {
        return a + " " + b;
    }
};

exports.list = function(...args){
    for (let i=0; i < args.length; i++){
        if (typeof args[i] !== "string"){
            return null;
        }
    }
    return args;
};
