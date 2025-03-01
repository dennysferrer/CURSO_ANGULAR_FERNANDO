
// function classDecorator<T extends {new (...args:any[]): {}}>(
//     constructor: T
// ) {
//     return class extends constructor {
//         newProperty = 'new property';
//         hello = 'override';
//     }
// }


// @classDecorator
// export class SuperClass {
//     public myProperty: string = 'ABC123';

//     print() {
//         console.log('Hello World');
//     }
// }

// console.log(SuperClass)

// const myClass = new SuperClass();
// console.log(myClass);

// function classDecorator(target: Function) {
//     console.log(target);
// }

// @classDecorator
// export class MyClass {
//     constructor() {
//         console.log('Hello World');
//     }
// }

function changeName(data: string) {
    return function<T extends {new (...args:any[]): {}}> (
        constructor: T
    ) {
        return class extends constructor {
            name: string = data
        }
    }
}

@changeName('Juan')
class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    sayHi() {
        console.log(`Hi, I am ${this.name}`);
    }
}

new Person('Pedro').sayHi(); // Hi, I am Juan
