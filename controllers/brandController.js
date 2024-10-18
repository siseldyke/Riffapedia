const { Bikes } = require('../models')

const getAllBikes = async (req, res) => {
  try {
    const bikes = await Bikes.find({})
    res.json(bikes)
  } catch (error) {
    console.error(error)
    res.status(500).send('Error fetching bikes')
  }
}

const getBikeById = async (req, res) => {
  try {
    const id = req.params.id;
    const bike = await Bikes.findById(id);
    if (!bike) throw new Error('404 Bike not found');
    res.json(bike);
  } catch (error) {
    console.error(error);
    res.status(404).send('Bike not found');
  }
}

const getBikeByType = async (req, res) => {
  try { 
      const bike = await Bikes.find( {'type': req.params.type})
      console.log(bike)
      if (bike) {
          return res.json(bike);
      }
      return res.status(404).send('bike type not found');
  } catch (error) {
      return res.status(500).send(error.message);
  }
}

const getBikeByBrand = async (req, res) => {
  try {
      const bike = await Bikes.find( {'brand': req.params.brand})
      if (bike) {
          return res.json(bike);
      }
      return res.status(404).send('bike brand not found');
  } catch (error) {
      return res.status(500).send(error.message);
  }
}

const createBike = async (req, res) => {
  try {
      const bike = await new Bikes(req.body)
      await bike.save()
      return res.status(201).json({
          bike,
      });
  } catch (error) {
      return res.status(500).json({ error: error.message })
  }
}


const updateBike = async (req, res) => {
    try {
        let { id } = req.params;
        let bike = await Bikes.findByIdAndUpdate(id, req.body, { new: true })
        if (bike) {
            return res.status(200).json(bike)
        }
        throw new Error("bike not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


const deleteBike= async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Bikes.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Bike has been deleted");
        }
        throw new Error("bike not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


module.exports = {
  getAllBikes,
  getBikeById,
  getBikeByType,
  getBikeByBrand,
  createBike,
  updateBike,
  deleteBike
}