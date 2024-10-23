const button = document.querySelector('#brandSearch')
const input = document.querySelector('#brandTextInput')



const brandNameContainer = document.querySelector('#brandName')
const brandImageContainer = document.querySelector('#brandImage')
const brandFounderContainer = document.querySelector('#brandFounder')
const brandYearContainer = document.querySelector ('#yearFounded')
const hiddenBrandDetails = document.querySelector('#brandDetails')
const guitarListContainer = document.querySelector('#guitarlist')
const guitarImageContainer = document.querySelector('#guitarBrandImage')


button.addEventListener('click',  async () => {
    guitarListContainer.innerHTML = ''
    
    let name = input.value
    let response = await axios.get(
        `http://localhost:3001/brands/${name}`
    )
   console.log(response.data)
   let brandName = response.data.brand[0].name
   brandNameContainer.textContent = (brandName)

   let brandImage = response.data.brand[0].image
   brandImageContainer.setAttribute('src', brandImage)
   
   let brandFounder= response.data.brand[0].founder
   brandFounderContainer.textContent = `Founder:  ${brandFounder}`

   let brandYear = response.data.brand[0].yearFounded
   brandYearContainer.textContent = `Year Founded: ${brandYear}`
   
   for (let i = 0; i < response.data.guitars.length; i++){
    const guitarCard = document.createElement("div");
    const guitarName = document.createElement("h2")
    const guitarImage = document.createElement("img")
    guitarName.innerText = response.data.guitars[i].modelName
   

    guitarImage.src = response.data.guitars[i].image
    guitarCard.appendChild(guitarName)
    guitarCard.appendChild(guitarImage)
    guitarListContainer.appendChild(guitarCard)
   }
   
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