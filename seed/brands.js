const db = require(`../db`)
const {Brand} = require(`../models`)

db.on(`error`, console.error.bind(console, `MongoDB connection error:`))

const main = async () => {

const brands =[
    {
        name: 'Fender',
        founder: 'leo fender',
        yearFounded: 1946,
        image: 'https://cdn11.bigcommerce.com/s-yzgoj/images/stencil/1280x1280/products/3229049/6215412/TIARP8793__69496.1709700475.jpg?c=2'
      
    },
    {
        name: 'Gibson',
        founder: 'orville gibson',
        yearFounded: 1894,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Gibson_Guitar_logo.svg/1280px-Gibson_Guitar_logo.svg.png'
      
    },
    {
        name: 'Ibanez',
        founder: 'hoshino gakki',
        yearFounded: 1957,
        image: 'https://1000logos.net/wp-content/uploads/2020/03/Ibanez-Logo.png'
      
    },
    {
        name: 'PRS',
        founder: 'paul reed smith',
        yearFounded: 1985,
        image: 'https://www.musicaccessstore.com/cdn/shop/collections/prs_1200x1200.png?v=1566250959'
      
    },
    {
        name: 'Gretsch',
        founder: 'friedrich gretsch',
        yearFounded: 1883,
        image: 'https://i.pinimg.com/originals/2a/f4/1b/2af41be77aa715802829c0a35b75657a.jpg'
      
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