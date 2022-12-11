const dayArg = process.argv[2];

if (dayArg && !!parseInt(dayArg) && parseInt(dayArg) <= 25) {
    console.log(`./days/days${dayArg}`)
    const day = require(`./days/day${dayArg}`)

    console.log(`DAY ${dayArg}`)
    console.log('======')
    day.part1();
    day.part2();
} else {
    const days = [1, 2, 3, 4, 5, 6]

    days.forEach(d => {
        const day = require(`./days/day${d}`)

        console.log(`DAY ${d}`)
        console.log('======')
        day.part1();
        day.part2()
        console.log('')
    })
}