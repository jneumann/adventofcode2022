const fs = require('fs'),
    path = require('path')

const input = fs.readFileSync(path.join(__dirname, 'input'), 'utf8').split(/\r\n/)

function charScore(char) {
    let charCode = char.charCodeAt(0),
        charScore = 0;

    if (charCode >= 97 && charCode <= 122) {
        charScore = charCode - 96;
    } else {
        charScore = charCode - 38
    }

    return charScore;
}

function part1() {
    const mangledInput = input.map(l => {
        let middle = Math.floor(l.length / 2)
        return[
            l.substring(0, middle),
            l.substring(middle)
        ]
    })

    let priority = 0;

    mangledInput.forEach(l => {
        l[0].split('').every(r => {
            if (l[1].includes(r)) {
                priority += charScore(r);

                return false
            }

            return true
        })
    })
    console.log("Part 1: " + priority )
    return;
}

function part2() {
    let priority = 0,
        groupedInput = [];

    input.forEach((l, i) => {
        let groupIndex = Math.floor(i / 3)
        
        if (!groupedInput[groupIndex]) {
            groupedInput[groupIndex] = []
        }

        groupedInput[groupIndex].push(l)
    })

    groupedInput.forEach(g => {
        g[0].split('').every((l) => {
            if (g[1].includes(l) && g[2].includes(l)) {
                priority += charScore(l)
                return false
            }

            return true
        })
    })

    console.log("Part 2: " + priority)

    return;
}

module.exports = {
    part1: part1,
    part2: part2
}