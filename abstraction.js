function Circle1(radius){
    this.radius = radius;

    let defaultLocation = { x:0 , y:0};

    this.getDefaultLocation = function(){
        return defaultLocation;
    };

    let computeOptimumLocation = function(factor){
        //..
    }

    this.draw = function(){
        
        computeOptimumLocation();
        console.log('draw');
    };
    Object.defineProperty(this,'defaultLocation',{
        get : function(){
            return defaultLocation;
        }
    },{
        set : function(value){
            if(!value.x || !value.y)
             throw new Error('Invalid Location');
            
             defaultLocation = value;
        }
    });
}
const a = new Circle1(1);
a.defaultLocation = 1;

