function compile(instructions: string[]) {
    const registers = {}
    const actions = {
        'INC': (reg: string) => {registers[reg] = registers.hasOwnProperty(reg) ? ++registers[reg] : 1},
        'DEC': (reg: string) => {registers[reg] = registers.hasOwnProperty(reg) ? --registers[reg] : -1},
        'MOV': (val: string, reg: string) => {registers[reg] = registers.hasOwnProperty(val) ? registers[val] : Number(val)},
        'JMP': (reg: string, idx: string) => {return !registers.hasOwnProperty(reg) || registers[reg] === 0 ? idx : undefined}
    }

    for (let i = 0; i < instructions.length;) {
        const pred = instructions[i].substring(0, 3)
        const args = instructions[i].substring(4).split(" ")
        let newidx: number | undefined = actions[pred](...args)
        i = newidx ?? ++i
    }
    return registers['A']
}

const instructions = [
    'MOV 2 X', 
    'DEC X',
    'DEC X',
    'JMP X 1',
    'MOV X A'
]

console.log(compile(instructions))