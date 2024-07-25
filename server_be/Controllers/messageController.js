const messageModel = require('../Models/messageModel')

//createMessage
const createMessage = async (req, res) => {
    const { chatId, senderId, text } = req.body
    try {
        const message = new messageModel({
            chatId, senderId, text
        })
       const response = await message.save()
        res.status(200).json(response)
    } catch (error) {
        console.log('error', error)
        res.status(500).json(error)
    }
}

//getMessage
const getMessage = async (req, res) => {
    const { chatId } = req.body
    try {
        const messages = await messageModel.find({
            chatId
        })
        res.status(200).json(messages)
    } catch (error) {
        console.log('error', error)
        res.status(500).json(error)
    }
}


module.exports = { createMessage, getMessage }
