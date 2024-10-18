const { Brand } = require('../models')

const getAllBrands = async (req, res) => {
  try {
    const brands = await Brand.find({})
    res.json(brands)
  } catch (error) {
    console.error(error)
    res.status(500).send('Error fetching brands')
  }
}

const getBrandById = async (req, res) => {
  try {
    const id = req.params.id;
    const brand = await Brand.findById(id);
    if (!brand) throw new Error('cant find that brand, dude');
    res.json(brand);
  } catch (error) {
    console.error(error);
    res.status(404).send('cant find that brand, dude');
  }
}
const createBrand = async (req, res) => {
    try {
        const brand = await new Brand(req.body)
        await brand.save()
        return res.status(201).json({
            brand,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
  }
  
  
  const updateBrand = async (req, res) => {
      try {
          let { id } = req.params;
          let brand = await Brand.findByIdAndUpdate(id, req.body, { new: true })
          if (brand) {
              return res.status(200).json(bike)
          }
          throw new Error("brand not found dude")
      } catch (error) {
          return res.status(500).send(error.message);
      }
  }
  
  
  const deleteBrand = async (req, res) => {
      try {
          const { id } = req.params;
          const deleted = await Brand.findByIdAndDelete(id)
          if (deleted) {
              return res.status(200).send("Removed the brand from existence bro");
          }
          throw new Error("brand not found dude");
      } catch (error) {
          return res.status(500).send(error.message);
      }
  }
  
  
  module.exports = {
    getAllBrands,
    getBrandById,
    createBrand,
    updateBrand,
    deleteBrand
  }