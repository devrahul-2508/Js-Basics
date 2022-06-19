
let person = {
    name: 'Rahul',
    age : 30
};

// Dot Notation
person.name = 'John';

// Bracket Notation
person['name'] = 'Mary';

let selection = 'name';
person[selection] = 'Rahul'
console.log(person.name);