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


const getGuitarists = async() => {
    const response = await axios.get(
        `http://localhost:3001/guitarists/`
    )
    let i = Math.floor(Math.random() * 10)
    let guitaristName = response.data[i].name
    nameContainer.textContent = (guitaristName)

    let guitaristImage = response.data[i].image
    imageContainer.setAttribute('src', guitaristImage)

    let guitarName = response.data[i].guitar.modelName
    guitarNameContainer.textContent = (guitarName)

    let guitarImage = response.data[i].guitar.image
    guitarContainer.setAttribute('src', guitarImage)
    console.log(response.data)


}
getGuitarists()







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

    let guitarName = response.data[0].guitar.modelName
    guitarNameContainer.textContent = (guitarName)

    let guitarImage = response.data[0].guitar.image
    guitarContainer.setAttribute('src', guitarImage)
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

// guitaristImage.addEventListener('click',async () => {
//     let response = await axios.get(
//         `http://localhost:3001/guitarists/${id}`
//     )
//     console.log(response)
// })




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