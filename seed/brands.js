const db = require(`../db`)
const {Brand} = require(`../models`)

db.on(`error`, console.error.bind(console, `MongoDB connection error:`))

const main = async () => {

const brands =[
    {
        name: 'Fender',
        founder: 'leo fender',
        yearFounded: 1946
      
    },
    {
        name: 'Gibson',
        founder: 'orville gibson',
        yearFounded: 1894
      
    },
    {
        name: 'Ibanez',
        founder: 'hoshino gakki',
        yearFounded: 1957
      
    },
    {
        name: 'PRS',
        founder: 'paul reed smith',
        yearFounded: 1985
      
    },
    {
        name: 'Gretsch',
        founder: 'friedrich gretsch',
        yearFounded: 1883
      
    },
]
await Brand.insertMany(brands)
console.log('brands made')
}
const run = async () => {
await main()
db.close()
}

run()