setTimeout(function () {
    console.log(1);
}, 0);

let oPromise = new Promise(function (resolve, reject) {

    console.log(2);
    if (1) {
        console.log(3);
        resolve(1);
    }


})

oPromise.then(function (params) {

    console.log(4);

})