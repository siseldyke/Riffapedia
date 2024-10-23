const button = document.querySelector('#brandSearch')
const input = document.querySelector('#brandTextInput')



const brandNameContainer = document.querySelector('#brandName')
const brandImageContainer = document.querySelector('#brandImage')




button.addEventListener('click',  async () => {
    let name = input.value
    let response = await axios.get(
        `http://localhost:3001/brands/${name}`
    )
   console.log(response.data[0])
   let brandName = response.data[0].name
   brandNameContainer.textContent = (brandName)

   let brandImage = response.data[0].image
   brandImageContainer.setAttribute('src', brandImage)
   
})

brandTextInput.addEventListener('keyup' , async (event) => {
    if (event.key === 'Enter') {
        button.click()
    }
})