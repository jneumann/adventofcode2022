const fs = require('fs'),
    path = require('path')

const input = fs.readFileSync(path.join(__dirname, 'input'), 'utf8')

function part1() {
    let stream = input.split(''),
        lastFour = []

    stream.every((s, index) => {
        if (lastFour.length > 3) {
            lastFour.shift()
            if (!lastFour.includes(s) && new Set(lastFour).size === 3) {
                console.log("Part 1: " + (index + 1) )
                return false
            }
        }

        lastFour.push(s)
        return true;
    })
}

function part2() {
    let stream = input.split(''),
    lastChars = []

stream.every((s, index) => {
    if (lastChars.length > 13) {
        lastChars.shift()
        if (!lastChars.includes(s) && new Set(lastChars).size === 13) {
            console.log("Part 2: " + (index + 1) )
            return false
        }
    }

    lastChars.push(s)
    return true;
})
}

module.exports = {
    part1: part1,
    part2: part2
}