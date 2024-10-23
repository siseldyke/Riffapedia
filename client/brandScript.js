const button = document.querySelector('#brandSearch')
const input = document.querySelector('#brandTextInput')



const brandNameContainer = document.querySelector('#brandName')
const brandImageContainer = document.querySelector('#brandImage')
const brandFounderContainer = document.querySelector('#brandFounder')
const brandYearContainer = document.querySelector ('#yearFounded')
const hiddenBrandDetails = document.querySelector('#brandDetails')



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
   
   let brandFounder= response.data[0].founder
   brandFounderContainer.textContent = ("average price: " ,brandFounder)

   let brandYear = response.data[0].yearFounded
   brandYearContainer.textContent = ("description: ",brandYear)
})

brandTextInput.addEventListener('keyup' , async (event) => {
    if (event.key === 'Enter') {
        button.click()
    }
})

brandImage.addEventListener('click',async () => {  
    if (hiddenBrandDetails.style.display === "none" || hiddenBrandDetails.style.display === ""){
        hiddenBrandDetails.style.display ="block"
    } else {
        hiddenBrandDetails.style.display = "none" 
    }
    
})