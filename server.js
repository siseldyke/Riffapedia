const express = require(`express`)
const cors = require(`cors`)
const PORT = process.env.PORT || 3001
const db = require(`./db`)
const bodyParser = require('body-parser');
const logger = require('morgan');
// const guitaristController = require(`./controllers/guitaristController`)
const guitarController = require(`./controllers/guitarController`)
// const brandController = require(`./controllers/brandController`)

const app = express()
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Riffapedia, EXCELLENT')
})

app.get('/guitars', guitarController.getAllGuitars)

app.get('/guitars/types/:type', guitarController.getGuitarByType)
app.get('/guitars/brands/:brand', guitarController.getGuitarByBrand)
app.get('/guitars/:id', guitarController.getGuitarById)
app.post('/guitars', guitarController.createGuitar)
app.put('/guitars/:id', guitarController.updateGuitar)
app.delete('/guitars/:id', guitarController.deleteGuitar)





app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})