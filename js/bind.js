// how to implement selt bind method 
// https://blog.csdn.net/u014267183/article/details/52610600

if(!function(){}.bind)
{
    Function.prototype.bind = function(context)
    { 
      var args = Array.prototype.slice.call(arguments);
      var self = this;
      return function(){
          return self.apply(context,args.slice(1))
      }
    };
}