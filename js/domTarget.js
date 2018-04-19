let inner = document.getElementById("inner");
let outter = document.getElementById("outter")

inner.addEventListener("click", function (event) {
    console.log(event.target);
    console.log(event.currentTarget);  
});

outter.addEventListener("click",function (event) {
    console.log(event.target);
    console.log(event.currentTarget);
    
})