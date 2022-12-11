const fs = require('fs'),
    path = require('path')

const input = fs.readFileSync(path.join(__dirname, 'input'), 'utf8').split(/\r\n\r\n/).map(m => m.split(/\r\n/))

function getStack(stackString) {
    let stack = [];

    stackString.forEach((n, i) => {
        let s = n.split('')

        s.forEach((c, i2) => {
            if (i2 === 1 || i2 % 4 === 1 ) {
                if (!(parseInt(c) > 0) && c !== ' ') {
                    const stackIndex = (i2 - 1) / 4
                    if (!stack[stackIndex]) [
                        stack[stackIndex] = []
                    ]

                    stack[stackIndex].push(c)
                }
            }
        })
    })

    return stack
}
function part1() {
    let stackString = input[0],
        instructions = input[1],
        stack = getStack(stackString)

    instructions.forEach(inst => {
        inst = inst.replace('move', '').split(/ from | to /)

        let quantity = inst[0],
            source = inst[1] - 1,
            destination = inst[2] -1
        
        for (let index = 0; index < quantity; index++) {
            let box = stack[source].shift()
            stack[destination].unshift(box)
        }
    })

    let topOfStack = '';

    stack.forEach(s => {
        topOfStack += s[0]
    })

    console.log("Part 1: " + topOfStack )
    return;
}

function part2() {
    let stackString = input[0],
        instructions = input[1],
        stack = getStack(stackString)

    instructions.forEach((inst, index) => {
        inst = inst.replace('move', '').split(/ from | to /)

        let quantity = inst[0],
            source = inst[1] - 1,
            destination = inst[2] - 1,
            boxen = []
        
        if (isNaN(source) || isNaN(destination)) { return; }

        for (let index = 0; index < quantity; index++) {
            boxen.push(stack[source].shift())
        }

        stack[destination].unshift(...boxen)
    })

    let topOfStack = '';

    stack.forEach(s => {
        topOfStack += s[0]
    })

    console.log("Part 2: " + topOfStack )
    return;
}

module.exports = {
    part1: part1,
    part2: part2
}