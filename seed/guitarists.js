const db = require(`../db`)
const {Guitarist} = require(`../models`)

db.on(`error`, console.error.bind(console, `MongoDB connection error:`))


const main = async () => {

const guitarists = [
    {
        name: 'Billie Joe Armstrong',
        band: 'green day',
        age: 0,
        alive: true ,
        description: 'etc',
        image: 'https://zagerguitar.com/blog/wp-content/uploads/2024/01/image-213-1024x1536.jpeg',
        guitar: '671296e1a2d0f497f53e511b',
        backgroundImage:'https://picfiles.alphacoders.com/471/471174.jpg'
    },
    {
        name: 'KT Tunstall',
        band: 'themself',
        age: 0,
        alive: true ,
        description: 'etc',
        image: 'https://farm1.static.flickr.com/105/251939944_43dfa08da8_o.jpg',
        guitar: '671296e1a2d0f497f53e511c',
        backgroundImage:''
    },
    {
        name: 'Carlos Santana',
        band: 'santana',
        age: 0,
        alive: true ,
        description: 'etc',
        image: 'https://d159anurvk4929.cloudfront.net/artist-news-legacy/Santana_Award2.jpg',
        guitar: '671296e1a2d0f497f53e511d',
        backgroundImage:''
    },
    {
        name: 'Jimi Hendrix',
        band: 'the jimi hendrix experience',
        age: 0,
        alive: false ,
        description: 'etc',
        image: 'https://www.bethelwoodscenter.org/assets/img/Barry-Z-Levine-Hendrix-f710a5b7d5.jpg',
        guitar: '671296e1a2d0f497f53e511e',
        backgroundImage:''
    },
    {
        name: 'Eddie Van Halen',
        band: 'van halen',
        age: 0,
        alive: false ,
        description: 'etc',
        image: 'https://guitar.com/wp-content/uploads/2023/08/Eddie-Van-Halen-Kramer-Guitar-1-image-Ross-Marino-Getty-Images@2000x1500-1068x801.jpg',
        guitar: '671296e1a2d0f497f53e511f',
        backgroundImage:''
    },
    {
        name: 'Joe Walsh',
        band: 'the eagles',
        age: 0,
        alive: true ,
        description: 'etc',
        image: 'https://www.rollingstone.com/wp-content/uploads/2018/06/rs-241362-GettyImages-109368522.jpg',
        guitar: '671296e1a2d0f497f53e5120',
        backgroundImage:''
    },
    {
        name: 'BB King',
        band: 'themself',
        age: 0,
        alive: false ,
        description: 'etc',
        image: 'https://cdn.britannica.com/14/188114-050-509AC2A7/American-BB-King.jpg',
        guitar: '671296e1a2d0f497f53e5121',
        backgroundImage:''
    },
    {
        name: 'Yvette Young',
        band: 'themself',
        age: 0,
        alive: true ,
        description: 'etc',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/A_Portrait_of_Yvette_Young_by_ZRubinPhoto.jpg/1200px-A_Portrait_of_Yvette_Young_by_ZRubinPhoto.jpg',
        guitar: '671296e1a2d0f497f53e5122',
        backgroundImage:''
    },
    {
        name: 'Brian Setzer',
        band: 'stray cats',
        age: 0,
        alive: true ,
        description: 'etc',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Brian_Salzburg_2006.JPG/1200px-Brian_Salzburg_2006.JPG',
        guitar: '671296e1a2d0f497f53e5123',
        backgroundImage:''
    },
    {
        name: 'Sturgill Simpson',
        band: 'sunday valley',
        age: 0,
        alive: true ,
        description: 'etc',
        image: 'https://i0.wp.com/countrycentral.com/wp-content/uploads/2024/06/173959663_102502828649422_7618592129052387109_n-edited.jpg?resize=1400%2C787&ssl=1',
        guitar: '671296e1a2d0f497f53e5124',
        backgroundImage:''
    },
]
await Guitarist.insertMany(guitarists)
console.log('Guitarists made')
}
const run = async () => {
await main()
db.close()
}

run()