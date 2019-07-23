const mongoose = require('mongoose')
const Shareholder = mongoose.model('Shareholder')
const Share = mongoose.model('Share')

const shareService = require('./share.service')

module.exports = {
    addShareholder,
    getShareholders,
    addShareToShareholder,
    removeShareFromShareholder
}

async function addShareholder(name) {
    let shareholder = new Shareholder()

    shareholder.name = name

    try {
        await shareholder.save()
    } catch (error) {
        throw new Error(`addShareholder service error: ${error}`)
    }
}

async function getShareholders() {
    try {
        const shareholders = await Shareholder.find()
        return shareholders
    } catch (error) {
        throw new Error(`getShareholders service error: ${error}`)
    }
}

async function addShareToShareholder(shareholderId, newShare) {
    try {
        const share = await shareService.addShare(newShare)
        const selectedShare = await shareService.getShareById(share._id)
        const shareholder = await Shareholder.findById(shareholderId)
        await shareholder.shares.push(selectedShare)
        await shareholder.save()
    } catch (error) {
        throw new Error(`addShareToShareholder service error: ${error}`)
    }
}

async function removeShareFromShareholder(shareholderId, shareId) {
    try {
         await Shareholder.findByIdAndDelete(shareholderId, 
            { $pull : { shares : { _id : shareId} }}, (err, doc) => {
                
                console.log(doc);
            })
        
    } catch (error) {
        throw new Error(`removeShareFromShareholder service error: ${error}`)
    }
}