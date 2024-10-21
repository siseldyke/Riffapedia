const button = document.querySelector('#guitaristSearch')
const input = document.querySelector('#textInput')
const nameContainer = document.querySelector('#guitaristName')

const imageContainer = document.querySelector('#guitaristImage')

const nextButton = document.querySelector('#nextChar')
const prevButton = document.querySelector('#previousChar')


button.addEventListener('click',  async () => {
    let name = input.value
    let response = await axios.get(
        `http://localhost:3001/guitarists/names/?name=${name}`
    )
   console.log(response.data.results[0])

   let guitaristName = response.data.results[0].name
    nameContainer.textContent = (guitaristName)

    let guitaristImage = response.data.results[0].image
    imageContainer.setAttribute('src', guitaristImage)
})