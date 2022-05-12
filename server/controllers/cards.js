import CardData from "../models/cardData.js";

export const setData = async (req, res) => {
    const body = req.body;
  
    const newCard = new CardData(body);

    try {
        await newCard.save();
        res.status(201).json({"RequestId":newCard._id, "Amount":newCard.amount});
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
