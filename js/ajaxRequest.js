
let fnStateChange = function () {
    if (xmlHttp.readyState = 4)
    {
        if (xmlHttp.status = 200) {
            //    do the call back function
        }
    }
else
    {
        alert("error");
    }

};

let xmlHttp = null;
if (window.XMLHttpRequest) {
    xmlHttp = new XMLHttpRequest();
}
else {
    xmlHttp = new ActiveXObject("Micorsoft.XMLHTTP");
}

if (xmlHttp != null) {
    xmlHttp.onreadystatechange = fnStateChange;
    xmlHttp.open("GET", "url", true);
    xmlHttp.send();
}
else {
    alert("error");
}

