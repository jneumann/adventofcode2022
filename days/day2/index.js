const fs = require('fs'),
    path = require('path')

const input = fs.readFileSync(path.join(__dirname, 'input'), 'utf8').split(/\r\n/).map(l => l.split(' '))

// A Rock
// B Paper
// C Scissors

// Lose 0
// Draw 3
// Win 6

function part1() {
    // X Rock     1
    // Y Paper    2
    // Z Scissors 3

    let totalScore = 0;

    input.forEach(i => {
        switch (i[1]) {
            case 'X':
                totalScore += 1
                switch(i[0]) {
                    case 'A':
                        totalScore += 3
                        break;
                    case 'C':
                        totalScore += 6
                        break;
                }
                break;
            case 'Y':
                totalScore += 2
                switch(i[0]) {
                    case 'A':
                        totalScore += 6
                        break;
                    case 'B':
                        totalScore += 3
                        break;
                }
                break;
            case 'Z':
                totalScore += 3
                switch(i[0]) {
                    case 'B':
                        totalScore += 6
                        break;
                    case 'C':
                        totalScore += 3
                        break;
                }
                break;
        }
    })

    console.log("Part 1: " + totalScore )
    return;
}

function part2() {
    // X Lose 0
    // Y Draw 3
    // Z Win  6
    let totalScore = 0;

    input.forEach(i => {
        switch (i[0]) {
            case 'A':
                switch (i[1]) {
                    case 'X':
                        totalScore += (0 + 3)
                        break;
                    case 'Y':
                        totalScore += (3 + 1)
                        break;
                    case 'Z':
                        totalScore += (6 + 2)
                        break;
                }
                break;
            case 'B':
                switch (i[1]) {
                    case 'X':
                        totalScore += (0 + 1)
                        break;
                    case 'Y':
                        totalScore += (3 + 2)
                        break;
                    case 'Z':
                        totalScore += (6 + 3)
                        break;
                }
                break;
            case 'C':
                switch (i[1]) {
                    case 'X':
                        totalScore += (0 + 2)
                        break;
                    case 'Y':
                        totalScore += (3 + 3)
                        break;
                    case 'Z':
                        totalScore += (6 + 1)
                        break;
                }
                break;
        }
    })
    console.log("Part 2: " + totalScore)

    return;
}

module.exports = {
    part1: part1,
    part2: part2
}