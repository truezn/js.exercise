let eventRegister = {
    addHandler: function (element,type,handler) {

        if (element.addEventListner)
        {
            // DOM2 event register
            element.addEventListner(type,handler,false);
        }else if(element.attachEvent)
        {
            // IE event register 
            element.attachEvent("on"+type,handler);
        }else{
            // DOM0 event register 
            element["on"+type] = handler; 
        }
        
    }, 
   removeHander:function (element,type,hander) {
       if(element.removeEventListner)
       {
        //    DOM2 event remove
           element.removeEventListner(type,hander,false)
       }else if(element.detachEvent)
       {
        //    IE event remove
           element.detachEvent("on"+type,handler);
       }else {
           element["on"+type]=null; 
       }
       
   }, 

   stopProporation:function (event) {
       if (event.stopProporation)
       {
        //    DOM 事件冒泡
           event.stopProporation(); 
       }else
       {
        //    IE
           event.cancelBubble = true;
       }
       
   }, 

   preventDefault:function (event) {
       if(event.preventDefault)
       {
        //    DOM 
           event.preventDefault();
       }else
       {
        //    IE
           event.returnValue = false;
       }
       
   }
};


let btn = document.getElementById("myButton01");
let fnHandler = function(){
    console.log("I have clicked the button");
}

eventRegister.addHandler(btn,"click",fnHandler);

