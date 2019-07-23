const shareService = require('../services/share.service')

module.exports = {
    createShare,
    updateShare,
    deleteShare
}

async function createShare(req, res) {
    const { square, code, contractUntil } = req.body
    const newShare = { square, code, contractUntil}
    console.log('newShare', newShare)
    
    try {
        await shareService.addShare(newShare)
        return res.status(200).json({success: true, newShare})
    } catch (error) {
        console.log(`createShare controller error: ${error}`)
        return res.status(400).json({success: false, error})
    }
}

async function updateShare(req, res) {
    const { square, code, contractUntil, _id } = req.body
    const newData = { square, code, contractUntil, _id }

    try {
        await shareService.editShare(_id, newData)
        return res.status(200).json({success: true, newData})
    } catch (error) {
        console.log(`updateShare controller error: ${error}`)
        return res.status(400).json({success: false, error})
    }
}

async function deleteShare(req, res) {
    const { _id } = req.body

    try {
        await shareService.removeShare(_id)
        return res.status(200).json({success: true})
    } catch (error) {
        console.log(`updateShare controller error: ${error}`)
        return res.status(400).json({success: false, error})
    }
}