var shallowCopy = function (src) {
    var dest = {};
    for (var key in src) {
        if (src.hasOwnProperty(key)) {
            dest[key] = src[key];

        }
    }
    return dest;
}


var aSrc = {
    "Name": "Ning", 
    "Array":[1,2]
};
var aDest = shallowCopy(aSrc);
console.log(aSrc);
console.log(aDest);

if(aDest.Array)
{
    aDest.Array[0] = 2; 
}

console.log("aSrc is"+aSrc.Array[0]);
console.log("aDest is"+aDest.Array[0]);