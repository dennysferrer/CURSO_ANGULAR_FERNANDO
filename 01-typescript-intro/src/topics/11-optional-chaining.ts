

export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Dennys'
}

const passenger2: Passenger = {
    name: 'Lurdes',
    children: ['Nicolas', 'Emiliano']
}

const printChildren = ({name, children}: Passenger) => {
    const howManyChildren = children?.length || 0;
    console.log(`The children account to ${name} is: ${howManyChildren}`);
}

printChildren(passenger2);
printChildren(passenger1);