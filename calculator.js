var pi = Math.PI;

function sin(a) {
    return parseFloat( Math.sin(a * pi / 180).toFixed(13) );
}

function cos(a) {
    return parseFloat( Math.cos(a * pi / 180).toFixed(13) );
}

function tan(a) {
    return parseFloat( Math.tan(a * pi / 180).toFixed(13) );
}

function cot(a) {
    return parseFloat( (1/Math.tan(a * pi / 180)).toFixed(13) );
}




function asin(a) {
    return parseFloat( (Math.asin(a) / (2*pi) * 360).toFixed(13) );
}

function acos(a) {
    return parseFloat( (Math.cos(a) / (2*pi) * 360).toFixed(13) );
}

function atan(a) {
    return parseFloat( (Math.atan(a) / (2*pi) * 360).toFixed(13) );
}

function acot(a) {
    return parseFloat( (Math.atan(1/a) / (2*pi) * 360).toFixed(13) );
}



function sqrt(a) {
    return parseFloat(Math.sqrt(a).toFixed(13));
}

function pow(a, b) {
    return parseFloat(Math.pow(a, b).toFixed(13));
}