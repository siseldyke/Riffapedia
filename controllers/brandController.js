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