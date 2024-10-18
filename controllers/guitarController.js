const { Guitar } = require('../models')

const getAllGuitars = async (req, res) => {
  try {
    const guitars = await Guitar.find({})
    res.json(guitars)
  } catch (error) {
    console.error(error)
    res.status(500).send('Error fetching guitars')
  }
}

const getGuitarById = async (req, res) => {
  try {
    const id = req.params.id;
    const guitar = await Guitar.findById(id);
    if (!guitar) throw new Error('cant find that axe, dude');
    res.json(bike);
  } catch (error) {
    console.error(error);
    res.status(404).send('cant find that axe, dude');
  }
}

const getGuitarByBrand = async (req, res) => {
  try { 
      const guitar = await Guitar.find( {'brand': req.params.brand})
      console.log(guitar)
      if (guitar) {
          return res.json(guitar);
      }
      return res.status(404).send('totally not a guitar brand dude');
  } catch (error) {
      return res.status(500).send('totally not a guitar brand dude');
  }
}

const getGuitarByType = async (req, res) => {
  try {
      const guitar = await Guitar.find( {'type': req.params.type})
      if (guitar) {
          return res.json(guitar);
      }
      return res.status(404).send('bro are you sure thats a type of axe?');
  } catch (error) {
      return res.status(500).send('bro are you sure thats a type of axe?');
  }
}

const createGuitar = async (req, res) => {
  try {
      const guitar = await new Guitar(req.body)
      await guitar.save()
      return res.status(201).json({
          guitar,
      });
  } catch (error) {
      return res.status(500).json({ error: error.message })
  }
}


const updateGuitar = async (req, res) => {
    try {
        let { id } = req.params;
        let guitar = await Guitar.findByIdAndUpdate(id, req.body, { new: true })
        if (guitar) {
            return res.status(200).json(bike)
        }
        throw new Error("guitar not found dude")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


const deleteGuitar= async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Guitar.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Removed the axe from existence bro");
        }
        throw new Error("guitar not found dude");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


module.exports = {
  getAllGuitars,
  getGuitarById,
  getGuitarByType,
  getGuitarByBrand,
  createGuitar,
  updateGuitar,
  deleteGuitar
}