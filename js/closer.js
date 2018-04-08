var increaseNum = function () {

    var num = 1;

    var add = function () {

        return num++;
    }

    return add;
}

var fn = increaseNum();
var showClickNum = function () {

    alert("click number is" + " " + fn());

}