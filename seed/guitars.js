const db = require(`../db`)
const {Guitar} = require(`../models`)

db.on(`error`, console.error.bind(console, `MongoDB connection error:`))

const main = async () => {



const guitars =[
    {
        modelName: 'Les Paul Junior Silver Mist',
        brand: 'gibson',
        type:'electric',
        averagePrice: 1900,
        description: 'etc',
        image: 'etc'
        
    },
    {
        modelName: 'Gretsch Guitars G6136-55 Vintage Select Edition 55 Falcon Hollowbody',
        brand: 'gretsch',
        type:'electric',
        averagePrice: 4000,
        description: 'etc',
        image: 'etc'
        
    },
    {
        modelName: 'PRS SE Santana',
        brand: 'prs',
        type:'electric',
        averagePrice: 3000,
        description: 'etc',
        image: 'etc'
        
    },
    {
        modelName: 'Fender Stratocaster Olympic White',
        brand: 'fender',
        type:'electric',
        averagePrice: 1199,
        description: 'etc',
        image: 'etc'
        
    },
    {
        modelName: 'Frankenstrat',
        brand: 'custom',
        type:'electric',
        averagePrice: 0,
        description: 'etc',
        image: 'etc'
        
    },
    {
        modelName: '1960 Gibson Les Paul Standard',
        brand: 'gibson',
        type:'electric',
        averagePrice: 13000,
        description: 'etc',
        image: 'etc'
        
    },
    {
        modelName: 'Gibson ES-335',
        brand: 'gibson',
        type:'electric',
        averagePrice: 3500,
        description: 'etc',
        image: 'etc'
        
    },
    {
        modelName: 'Ibanez YY10',
        brand: 'ibanez',
        type:'electric',
        averagePrice: 1099,
        description: 'etc',
        image: 'etc'
        
    },
    {
        modelName: 'Gretsch G6120T-HR',
        brand: 'gretsch',
        type:'electric',
        averagePrice: 3600,
        description: 'etc',
        image: 'etc'
        
    },
    {
        modelName: 'Fender Telecaster',
        brand: 'fender',
        type:'electric',
        averagePrice: 1200,
        description: 'etc',
        image: 'etc'
        
    },
]
await Guitar.insertMany(guitars)
console.log('Guitars made')
}
const run = async () => {
await main()
db.close()
}

run()