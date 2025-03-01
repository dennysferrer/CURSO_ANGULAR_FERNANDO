

const skill:string[] = ['Bash', 'Counter', 'Healing']

interface Ihero {
    name: string,
    hp: number,
    skills: string[],
    hometown?: string
}

const Strider: Ihero = {
    name: 'Strider',
    hp: 100,
    skills: skill
}

Strider.hometown = 'Gondor'
console.table(Strider)


export {}