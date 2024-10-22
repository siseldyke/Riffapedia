const { Guitarist } = require('../models')

const getAllGuitarists = async (req, res) => {
  try {
    const guitarists = await Guitarist.find({}).populate('guitar')
    res.json(guitarists)
  } catch (error) {
    console.error(error)
    res.status(500).send('Error fetching guitarists')
  }
}

const getGuitaristById = async (req, res) => {
  try {
    const id = req.params.id;
    const guitarist = await Guitarist.findById(id);
    if (!guitarist) throw new Error('cant find that guitarist, dude');
    res.json(guitarist);
  } catch (error) {
    console.error(error);
    res.status(404).send('cant find that shredder, dude');
  }
}

const getGuitaristByName = async (req, res) => {
  try { 
      const {Name} = req.params
      console.log(Name)
      const guitarist = await Guitarist.find( {'name': new RegExp(Name, 'i')}).populate('guitar')
      console.log(guitarist)
      if (guitarist.length > 0) {
          return res.json(guitarist);
      }
      return res.status(404).send(`cant find ${Name} anywhere dude`);
  } catch (error) {
    if (error.name === 'CastError' && error.kind === 'ObjectId')
      return res.status(404).send('dont think that person exists bro');
      return res.status(500).send('totally not a name for a player dude');
  }
}

const getGuitaristByAge = async (req, res) => {
  try {
      const guitarist = await Guitarist.find( {'age': req.params.age})
      if (guitarist) {
          return res.json(guitarist);
      }
      return res.status(404).send('bro are you sure thats an age');
  } catch (error) {
      return res.status(500).send('bro are you sure thats an age?');
  }
}

const createGuitarist = async (req, res) => {
  try {
      const guitarist = await new Guitarist(req.body)
      await guitarist.save()
      return res.status(201).json({
          guitarist,
      });
  } catch (error) {
      return res.status(500).json({ error: error.message })
  }
}


const updateGuitarist = async (req, res) => {
    try {
        let { id } = req.params;
        let guitarist = await Guitarist.findByIdAndUpdate(id, req.body, { new: true })
        if (guitarist) {
            return res.status(200).json(guitarist)
        }
        throw new Error("guitarist not found dude")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


const deleteGuitarist = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Guitarist.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Removed the dude from existence bro");
        }
        throw new Error("guitarist not found dude");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


module.exports = {
  getAllGuitarists,
  getGuitaristById,
  getGuitaristByName,
  getGuitaristByAge,
  createGuitarist,
  updateGuitarist,
  deleteGuitarist
}