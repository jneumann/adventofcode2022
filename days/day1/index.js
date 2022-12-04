const fs = require('fs'),
    path = require('path')

const input = fs.readFileSync(path.join(__dirname, 'input'), 'utf8').split(/\r?\n\r?\n/).map(i => i.split(/\r\n/)).map(l => {
    l.forEach(n => {
        if (n) {
            n = parseInt(n)
        }
    })

    return l
})

function findElfWeight(input) {
    let elfWeight = []

    input.forEach(i => {
        let totalWeight = 0;

        i.forEach(w => {
            totalWeight += parseInt(w)
        })

        elfWeight.push(totalWeight)
    })

    return elfWeight
}

function part1() {
    let elfWeight = findElfWeight(input)

    console.log("Part 1: " + Math.max(...elfWeight))
    return;
}

function part2() {
    let elfWeight = findElfWeight(input)
    elfWeight.sort((a, b) => b - a)

    let topThree = elfWeight[0] + elfWeight[1] + elfWeight[2]

    console.log("Part 2: " + topThree)

    return;
}

module.exports = {
    part1: part1,
    part2: part2
}