// This exercies is used for cookies setter and getter 
let oCookies = {
    setCookie: function (key, val, time) {
        let oDate = new Date();
        let experiTime = time;
        oDate.setTime(oDate.getTime() + experiTime * 24 * 3600 * 1000);
        document.cookie = key + "=" + val + ";Experiation" + "is" + oDate.toGMTString();

    },

    getCookie: function (key) {
        let tip; 
        if (document.cookie.length > 0) {
            let formatedCookie = document.cookie.replace(/[]/g, "");
            let arrCookie = formatedCookie.split(";");
            for (let i = 0; i < arrCookie.length; i++) {
                let arrSubCookie = arrCookie[i].split("=");
                if (key == arrSubCookie[0]) {
                    tip = arrSubCookie[1];
                    return tip; 
                    break; 
                }

            }

        } else {
            console.log("No cookies could be found by key" + key);
        }

    }
}