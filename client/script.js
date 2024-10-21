const button = document.querySelector('#guitaristSearch')
const input = document.querySelector('#textInput')
const nameContainer = document.querySelector('#guitaristName')

const imageContainer = document.querySelector('#guitaristImage')

const nextButton = document.querySelector('#nextGuitarist')
const prevButton = document.querySelector('#previousGuitarist')


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
})

//guitarist.guitar.image etc