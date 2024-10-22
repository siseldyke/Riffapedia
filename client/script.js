const button = document.querySelector('#guitaristSearch')
const input = document.querySelector('#textInput')
const nameContainer = document.querySelector('#guitaristName')

const imageContainer = document.querySelector('#guitaristImage')
const guitarNameContainer = document.querySelector('#guitarName')
const guitarContainer = document.querySelector('#guitarImage')
const nextButton = document.querySelector('#nextGuitarist')
const prevButton = document.querySelector('#previousGuitarist')
const textInput = document.querySelector('#textInput')

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
// document.addEventListener("DOMContentLoaded", function() {
//     your_function();
//   });
//guitarist.guitar.image etc