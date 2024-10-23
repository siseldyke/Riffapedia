const  { Schema } = require('mongoose')

const brandSchema = new Schema(
    {
        name: { type: String, required: true },
        founder: { type: String, required: true },
        yearFounded:{type: Number, required: true},
        image:{type: String, required: true}
      
    },
    
    { timestamps: true },
)

module.exports = brandSchema