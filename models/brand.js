const  { Schema } = require('mongoose')

const brandSchema = new Schema(
    {
        name: { type: String, required: true },
        founder: { type: String, required: true },
        yearFounded:{type: String, required: true},
      
        
    },
    
    { timestamps: true },
)

module.exports = brandSchema