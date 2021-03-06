let deepClone = function (srcObj) {

    let targetObj = Array.isArray(srcObj) ? [] : {};
    if (srcObj && typeof srcObj == "object") {
        for (let key in srcObj) {
            if (srcObj.hasOwnProperty(key)) {
                if (srcObj[key] && typeof srcObj[key] == "object") {
                    targetObj[key] = deepClone(srcObj[key]);
                } else {
                    targetObj[key] = srcObj[key];
                }

            }

        }

    }
    return targetObj;

};

let a01 = [1, 2, {
    "first": 1,
    "second": 2
}];
let a02 = deepClone(a01);
console.log(a01);
console.log(a02);
a01[2].first = "3";
console.log(a01);
console.log(a02);

let b01 = {
    "Name": "Ning",
    "Gender": "male", 
    "work":{
        "address":"zhangjiang",
        "type":"IT"
    }
};

let b02 = deepClone(b01);
console.log("this is for testing obj clone");
console.log(b01);
console.log(b02);

b02.work.address="caohejing";
console.log(b01);
console.log(b02);

// to use json parse and stringify to implement deepClone 
console.log("to use json for deep copy");
let deepClone2 = function (srcObj) {
    let _tempObj = JSON.stringify(srcObj);
    let targetObj = JSON.parse(_tempObj);
    return targetObj;  
};
let c01 = [1,2,{"first":"name","second":2}];
let c02 = deepClone2(c01);
console.log(c01);
console.log(c02);

c02[2].first=1; 
console.log(c01);
console.log(c02);



