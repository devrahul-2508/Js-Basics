// Constructor function
function Circle(radius){
    this.radius = radius
    this.draw = function(){
        console.log('draw');
    }
}
const another = new Circle(1);

function Person(first,last,age){
    this.firstName = first
    this.lastName = last,
    this.age = age;

    

}

const p = new Person('Rahul','Roy',20);
console.log(p.firstName+" "+p.lastName+" "+p.age);