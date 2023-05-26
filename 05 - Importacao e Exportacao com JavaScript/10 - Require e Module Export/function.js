

const person = {
    name: 'Paul',
    age: 30
}

function getName(){
    return person.name;
}

function getAge(){
    return person.age;
}
module.exports = { getName, getAge};