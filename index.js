exports.combine = function(a, b){
    if (typeof a == 'number' && typeof b == 'number'){
        a = Number(a);
        b = Number(b);
        return a + b;
    } else {
        return a + " " + b;
    }
}
