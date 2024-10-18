const  { Schema } = require('mongoose')

const guitaristSchema = new Schema(
    {
        name: { type: String, required: true },
        band: { type: String, required: true },
        age:{type: Number, required: true},
        alive:{type: Boolean, required: true},
        description: { type: String, required: true },
        image: {type: String, required: true},
        guitar: {type: Schema.Types.ObjectId, ref: 'Guitar' }
    },
    
    { timestamps: true },
)

module.exports = guitaristSchema