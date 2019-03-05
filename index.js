exports.combine = function(a, b){
    if (typeof a == 'number' && typeof b == 'number'){
        return Math.round(a) + Math.round(b);
    } else {
        return a + " " + b;
    }
};
