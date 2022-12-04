const fs = require('fs'),
    path = require('path')

const input = fs.readFileSync(path.join(__dirname, 'input'), 'utf8').split(/\r\n/)


function part1() {
    let overlap = 0,
        sectionInput = []

    input.forEach(i => sectionInput.push(i.split(',')))

    sectionInput.forEach(s => {
        if (s[0] && s[1]) {
            let section1 = s[0].split('-').map(m => parseInt(m)),
                section2 = s[1].split('-').map(m => parseInt(m))

            if (
                (section1[0] <= section2[0] && section1[1] >= section2[1]) ||
                (section1[0] >= section2[0] && section1[1] <= section2[1])
            ) {
                overlap += 1
            }
        }
    })

    console.log("Part 1: " + overlap )
    return;
}

function part2() {
    let overlap = 0,
       sectionInput = []

    input.forEach(i => sectionInput.push(i.split(',')))

    sectionInput.forEach(s => {
        if (s[0] && s[1]) {
            let section1 = s[0].split('-').map(m => parseInt(m)),
                section2 = s[1].split('-').map(m => parseInt(m))

            if (
                (section1[0] >= section2[0] && section1[0] <= section2[1]) ||
                (section1[1] >= section2[0] && section1[0] <= section2[1]) ||
                (section2[0] >= section1[0] && section2[0] <= section1[1]) ||
                (section2[1] >= section1[0] && section2[1] <= section1[1])
            ) {
                overlap += 1
            }
        }
    })

    console.log("Part 2: " + overlap)
    return;
}

module.exports = {
    part1: part1,
    part2: part2
}