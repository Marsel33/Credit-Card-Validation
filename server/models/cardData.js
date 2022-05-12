import mongoose from "mongoose";

const cardSchema = mongoose.Schema({
    cardNumber: Number,
    expirationDate: String,
    cvv: Number,
    amount: Number,
    createdAt: {
        type: Date, 
        default: new Date()
    },
});

const CardData = mongoose.model('CardData', cardSchema);

export default CardData;