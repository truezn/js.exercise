// This js described the js override 

fn0 = function(){
    console.log("I am with arguments 0");
};

fn1 = function(id){
    console.log(id);
};

var fnOverride01 = function(){

    var argLength = arugments.length;
    switch (argLength)
    {
        case 0:
        {
            fn0();
            break;
        }
        case 1: 
        {
            fn1();
            break; 
        }
    }
};