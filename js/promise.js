let getData = new Promise(function (resolve, reject) {
    let xmlHttpRequest = new xmlHttpRequest();
    xmlHttpRequest.open("method", url);
    xmlHttpRequest.send();
    xmlHttpRequest.onload = function (params) {
        if (this.status = 200) {
            resolve(this.response);
        } else {
            reject(this.statustext); 
        }

    }
    xmlHttpRequest.onError = function (params) {
        reject(this.statustext);
    }

    return promise; 

})

getData().then(fnSuccess,fnError);