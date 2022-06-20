function Circle(radius){
    this.radius = radius
    this.draw = function(){
        console.log('draw');
    }
}
const c = new Circle(10);

c.location = {x : 1};
circle['location'] = {x : 1};  

delete c.location;

for(let key in c){ 
    if(typeof c[key] != 'function')
    console.log(key,c[key])
}

const keys = Object.keys(circle);
console.log(keys);

if('radius' in c){
    console.log('Circle has a radius');
}