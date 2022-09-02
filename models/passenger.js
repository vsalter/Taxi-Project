const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const passengerSchema = new Schema({
    noOfSeats: {type: String, enum: ['1', '2', '3', '4']},
    cost: {type: String, enum: ['5', '10', '15', '20']},
    taxi: {type: Schema.Types.ObjectId, ref: 'Taxi'}
},{ timestamps:true
});

module.exports = mongoose.model("Passenger", passengerSchema);