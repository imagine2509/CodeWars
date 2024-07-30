/**
 * https://www.codewars.com/kata/57a73e697cb1f31dd70000d2/train/javascript
 * The Chinese zodiac is a repeating cycle of 12 years, with each year being represented by an animal and its reputed attributes. The lunar calendar is divided into cycles of 60 years each, and each year has a combination of an animal and an element. There are 12 animals and 5 elements; the animals change each year, and the elements change every 2 years. The current cycle was initiated in the year of 1984 which was the year of the Wood Rat.
 *
 * Since the current calendar is Gregorian, I will only be using years from the epoch 1924. For simplicity I am counting the year as a whole year and not from January/February to the end of the year.
 *
 * ##Task
 *
 * Given a year, return the element and animal that year represents ("Element Animal"). For example I'm born in 1998 so I'm an "Earth Tiger".
 *
 * animals (or $animals in Ruby) is a preloaded array containing the animals in order:
 *
 * ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig']
 *
 * elements (or $elements in Ruby) is a preloaded array containing the elements in order:
 *
 * ['Wood', 'Fire', 'Earth', 'Metal', 'Water']
 * */

const animals = ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig']
const elements = ['Wood', 'Fire', 'Earth', 'Metal', 'Water']

function chineseZodiac(year) {
    /** value of year 1984 - Wood Rat means 0 element in both arrays */
    const yearDifference = year - 1984 // find out gap between target year and 1984 as our default
    if (yearDifference === 0) return [elements[0], animals[0]].join(' ') // early return on 1984
    const direction = yearDifference > 0 ? 'up' : 'down'

    /** let's find out how many years left after certain number of full iterations */
    const yearsLeftOnElements = Math.abs(yearDifference % 10) // number of elements * 2 because we switch every 2 years
    const yearsLeftOnAnimals = Math.abs(yearDifference % 12)

    console.log(yearsLeftOnElements, yearsLeftOnAnimals)

    if (yearsLeftOnElements === 0 && yearsLeftOnAnimals === 0) return [elements[0], animals[0]].join(' ') // early return on Wood Rat

    let element = ''
    let animal = ''

    switch (direction) {
        case 'up':
            element = yearsLeftOnElements === 0 ? elements[0] : elements[Math.floor(yearsLeftOnElements / 2)]
            animal = yearsLeftOnAnimals === 0 ? animals[0] : animals[yearsLeftOnAnimals]
            break
        case 'down':
            element = yearsLeftOnElements === 0 ? elements[0] : elements[elements.length - Math.ceil((yearsLeftOnElements / 2))]
            animal = yearsLeftOnAnimals === 0? animals[0] : animals[animals.length - yearsLeftOnAnimals]
            break
    }
    return `${element} ${animal}`
}

console.log(chineseZodiac(1972))


/** Most upvoted kata solution in CodeWars */

function chineseZodiac(year){
    return elements[Math.floor(((year-1924)%10)/2)]+' '+animals[(year-1924)%12];
}