const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    destinationCity: {type: String, enum: ['ATL','Macon','Marietta','Decatur','Riverdale']},
    destAddy: {type: String},
},{ timestamps:true
})

const taxiSchema = new Schema({
    carType: {type: String, enum: ['Sedan gas', 'Sedan electric', 'SUV']},
    pickupCity: {type: String, enum: ['ATL','Macon','Marietta','Decatur','Riverdale']},
    pickupAddy: {type: String},
    departs: {type: Date, default: function(){
        return new Date(new Date().setFullYear(new Date().getFullYear()+1))
    }},
    destinations: [destinationSchema],
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    userAvatar: String,
    userEmail: String

},{ timestamps:true
});
module.exports = mongoose.model("Taxi", taxiSchema);