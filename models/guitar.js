const  { Schema } = require('mongoose')

const guitarSchema = new Schema(
    {
        name: { type: String, required: true },
        brand: { type: String, required: true },
        type:{type: String, required: true},
        averagePrice:{type: Number, required: true},
        description: { type: String, required: true },
        image: {type: String, required: true}
        
    },
    
    { timestamps: true },
)

module.exports = guitarSchema