

export class Person {
    constructor(
        public name: string, 
        private address: string = 'No address') 
        {}
}

export class Hero extends Person {
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string
    ) {
        super(realName, 'New York');
    }
}

const ironman = new Hero('Ironman', 45, 'Tony Stark');
console.log(ironman);

export {};