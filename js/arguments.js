let fn = function (para1,para2) {
    console.log(arguments);
};

console.log(fn.arguments instanceof Array); 
fn();
console.log(fn.arguments instanceof Object);
console.log(typeof(fn.arguments));