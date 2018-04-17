
var showMyPosition = function getOffset(elem) {
    if (elem.getBoundingClientRect) {
        console.log(getOffsetRect(elem));

    } else { // old browser
        console.log(getOffsetSum(elem));

    }
}

function getOffsetRect(elem) {
    var box = elem.getBoundingClientRect()
    var body = document.body
    var docElem = document.documentElement
    var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop
    var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft
    var clientTop = docElem.clientTop || body.clientTop || 0
    var clientLeft = docElem.clientLeft || body.clientLeft || 0
    var top = box.top + scrollTop - clientTop
    var left = box.left + scrollLeft - clientLeft
    return {
        top: Math.round(top),
        left: Math.round(left)
    }

}

