const dayArg = process.argv[2];

if (dayArg && !!parseInt(dayArg) && parseInt(dayArg <= 25)) {
    const day = require(`./days/day${dayArg}`)

    day.part1();
    day.part2();
}

const day1 = require('./days/day1');

day1.part1();
day1.part2()