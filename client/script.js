const button = document.querySelector('#guitaristSearch')
const input = document.querySelector('#textInput')
const nameContainer = document.querySelector('#guitaristName')

const imageContainer = document.querySelector('#guitaristImage')
const guitarNameContainer = document.querySelector('#guitarName')
const guitarContainer = document.querySelector('#guitarImage')
const nextButton = document.querySelector('#nextGuitarist')
const prevButton = document.querySelector('#previousGuitarist')
const textInput = document.querySelector('#textInput')
const audio = document.querySelector("audio")
const excellentButton = document.querySelector('#excellent')

const guitaristBandContainer = document.querySelector('#guitaristBand')
const guitaristAgeContainer = document.querySelector('#guitaristAge')
const guitaristDesContainer = document.querySelector('#guitaristDescription')

const guitarBrandContainer = document.querySelector('#guitarBrand')
const guitarTypeContainer = document.querySelector('#guitarType')
const guitarPriceContainer = document.querySelector('#guitarPrice')
const guitarDescContainer = document.querySelector('#guitarDesc')
const hiddenGuitaristDetails = document.querySelector('#guitaristDetails')
const hiddenGuitarDetails = document.querySelector('#guitarDetails')


const getGuitarists = async() => {
    const response = await axios.get(
        `http://localhost:3001/guitarists/`
    )
    let i = Math.floor(Math.random() * 10)
    let guitaristName = response.data[i].name
    nameContainer.textContent = (guitaristName)

    let guitaristImage = response.data[i].image
    imageContainer.setAttribute('src', guitaristImage)

    let guitaristBand = response.data[i].band
    guitaristBandContainer.textContent = ` band:  ${guitaristBand}`

    let guitaristAge = response.data[i].age
    guitaristAgeContainer.textContent = ` age:  ${guitaristAge}`

    let guitaristDesc = response.data[i].description
    guitaristDesContainer.textContent = `description: ${guitaristDesc}`

    

    let guitarName = response.data[i].guitar.modelName
    guitarNameContainer.textContent = (guitarName)

    let guitarImage = response.data[i].guitar.image
    guitarContainer.setAttribute('src', guitarImage)
    
    let guitarBrand= response.data[i].guitar.brand
    guitarBrandContainer.textContent = `brand:  ${guitarBrand}`

    let guitarType = response.data[i].guitar.type
    guitarTypeContainer.textContent = `type: ${guitarType}`

    let guitarPrice= response.data[i].guitar.averagePrice
    guitarPriceContainer.textContent = `average price: ${guitarPrice}`

    let guitarDesc = response.data[i].guitar.description
    guitarDescContainer.textContent = `description: ${guitarDesc}`

    document.body.style.backgroundImage = `url('${response.data[i].backgroundImage}')`;
    
console.log(response.data[i])


}
getGuitarists()
//assign a value to ids in a variable
//div has initial styling of none
//first step get info on screen in seperate section
//create an array of objects that has name or band as key, then a url to image
//




button.addEventListener('click',  async () => {
    let name = input.value
    let response = await axios.get(
        `http://localhost:3001/guitarists/names/${name}`
    )
   console.log(response.data[0])

   let guitaristName = response.data[0].name
    nameContainer.textContent = (guitaristName)

    let guitaristImage = response.data[0].image
    imageContainer.setAttribute('src', guitaristImage)

    let guitaristBand = response.data[0].band
    guitaristBandContainer.textContent = ` band:  ${guitaristBand}`

    let guitaristAge = response.data[0].age
    guitaristAgeContainer.textContent = ` age:  ${guitaristAge}`

    let guitaristDesc = response.data[0].description
    guitaristDesContainer.textContent = `description: ${guitaristDesc}`

    let guitarName = response.data[0].guitar.modelName
    guitarNameContainer.textContent = (guitarName)

    let guitarImage = response.data[0].guitar.image
    guitarContainer.setAttribute('src', guitarImage)

    let guitarBrand= response.data[0].guitar.brand
    guitarBrandContainer.textContent = `brand:  ${guitarBrand}`

    let guitarType = response.data[0].guitar.type
    guitarTypeContainer.textContent = `type: ${guitarType}`

    let guitarPrice= response.data[0].guitar.averagePrice
    guitarPriceContainer.textContent = `average price: ${guitarPrice}`

    let guitarDesc = response.data[0].guitar.description
    guitarDescContainer.textContent = `description: ,${guitarDesc}`
})


textInput.addEventListener('keyup' , async (event) => {
    if (event.key === 'Enter') {
        button.click()
    }
})
excellentButton.addEventListener('click', async () =>{
    audio.volume =0.3
    audio.play()
})

guitaristImage.addEventListener('click',async () => {  
    if (hiddenGuitaristDetails.style.display === "none" || hiddenGuitaristDetails.style.display === ""){
        hiddenGuitaristDetails.style.display ="block"
    } else {
        hiddenGuitaristDetails.style.display = "none" 
    }
    
})


guitarImage.addEventListener('click',async () => {
    if (hiddenGuitarDetails.style.display === "none" || hiddenGuitarDetails.style.display === ""){
        hiddenGuitarDetails.style.display ="block"
    } else {
        hiddenGuitarDetails.style.display = "none" 
    }
})



//same html have some elements that can pop out and show
//make on click event for pictures that shows the stuff, possibly hide on another click
//


//dogs api for reference, array of ids, random number generator

    //wrap images in "a" tag, not give it an Href/source/something
    //setting attribute  "new  html page"
    //same thing as a call to the images
    //you need at least one new HTML file thats responsive to person/guitar
    //to populate the specific info thats shown, have the href just go to 
    //the new html page and new javascript for axios call

    // let guitaristName = response.data[i].name
    // nameContainer.textContent = (guitaristName)
    // console.log(i)

    // make randomNumberGenerator 0-9 as numbers, sets a random number "i"
//everytime the page loads somewhere between 18-20 in get guitarist function
// have the random generator number function go
//h1.innerHTML = response.data[i]name 
//img.innerHTML = response.data[i].imgae, .guiat .guitar.image
//possibly list tags

//dont use multiple html files just clear the dom out