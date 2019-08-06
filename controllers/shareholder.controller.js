const shareholderService = require('../services/shareholder.service')

module.exports = {
    createShareholder,
    getShareholders,
    appendShareToShareholder,
    appendExistShareToShareholder,
    deleteShareFromShareholder
}

async function createShareholder(req, res) {
    const { name } = req.body

    try {
        await shareholderService.addShareholder(name)
        return res.status(201).json({success: true, name})
    } catch (error) {
        console.error(`createShareholder controller error: ${error}`);
        return res.status(400).json({success: false, error})
    }
}

async function getShareholders(req, res) {
    try {
        const shareholders = await shareholderService.getShareholders()
        return res.status(200).json({success: true, shareholders})
    } catch (error) {
        console.error(`getShareholders controller error: ${error}`)
        return res.status(400).json({success: false, error})
    }
}

async function appendExistShareToShareholder(req, res) {
    const { shareholderId, shareId } = req.body

    try {
        await shareholderService.addExistShareToShareholder(shareholderId, shareId)
        return res.status(200).json({success: true})
    } catch (error) {
        return res.status(400).json({success: false, error})
    }
}

async function appendShareToShareholder(req, res) {
    const { _id, square, code, contractUntil } = req.body
    const newShare = { square, code, contractUntil, isShare: true }

    try {
        await shareholderService.addShareToShareholder(_id, newShare)
        return res.status(200).json({success: true})
    } catch (error) {
        console.error(`appendShareToShareholder controller error: ${error}`)
        return res.status(400).json({success: false, error})
    }
}

async function deleteShareFromShareholder(req, res) {
    const {_id, shareId} = req.body

    try {
        await shareholderService.removeShareFromShareholder(_id, shareId)
        return res.status(200).json({success: true})
    } catch (error) {
        console.error(`deleteShareFromShareholder controller error: ${error}`)
        return res.status(400).json({success: false, error})
    }
}