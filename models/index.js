const mongoose = require('mongoose')
const guitaristSchema = require('./guitarist')
const guitarSchema = require('./guitar')
const brandSchema = require('./brand')

const Guitarist = mongoose.model('Guitarist', guitaristSchema)
const Guitar = mongoose.model('Guitar', guitarSchema)
const Brand = mongoose.model('Brand', brandSchema)

module.exports = {
    Guitarist,
    Guitar,
    Brand
}