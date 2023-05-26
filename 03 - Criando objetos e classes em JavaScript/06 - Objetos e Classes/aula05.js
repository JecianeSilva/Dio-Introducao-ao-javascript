// ________________________ OBJETOS E CLASSES ________________________________
// ---------------------------------------------------------------------------

// objetos
const person = {
    name: 'Juan',
    age: 20,

    detail: function () {
        console.log(`Meu nome é ${this.name} e minha idade é ${this.age}`);
    }
}
console.log(person);

person.age = 21; // alterando as informações 
console.log(person);

delete person.age; // deletando idade
console.log(person);

person.age = 21; // incluindo idade;
console.log(person);


person.detail(); // chamando função detail criada em person

//sobreescrebendo a função
person.detail = function () {
    console.log(`Meu nome é ${this.name}`);
}
person.detail(); // chamando nova função

console.log(person['name'])
console.log(person.age);


// classes

class Person {
    name;
    age;
    dateBirthday;

    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.dateBirthday = 2022 - age;
    }

    detail() {
        console.log(`Meu nome é ${this.name} e minha idade é ${this.age}`);
    }
}

const henry = new Person('henry', 20);
console.log(henry);
henry.detail();

const Paul = new Person('Paul', 35);
console.log(Paul);
Paul.detail();

function PersonCompare(person1, person2) {
    if (person1.age > person2.age) {
        console.log(`${person1.name} é mais velho(a) que ${person2.name}`);
    } else if (person2.age > person1.age) {
        console.log(`${person2.name} é mais velho(a) que ${person1.name}`);
    } else {
        console.log(`${person1.name} e ${person2.name} tem a mesma idade`);
    }
}

PersonCompare(henry, Paul);