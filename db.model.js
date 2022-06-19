const mongoose = require("mongoose")
const schema = mongoose.Schema
let Db = new schema({
    plant: {
        farm: { type:String },

        plant: { typy: String },
        activities: { type: String },
        date:{ type: String },
    }
})
module.exports = mongoose.model('Db', Db)