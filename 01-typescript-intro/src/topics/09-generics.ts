

export function whatMyType<T> (argument: T): T {
    return argument;

}

let amIString = whatMyType('hola');
console.log(amIString.split(''));