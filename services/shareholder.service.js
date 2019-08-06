const mongoose = require('mongoose')
const Shareholder = mongoose.model('Shareholder')
const Share = mongoose.model('Share')

const shareService = require('./share.service')

module.exports = {
    addShareholder,
    getShareholders,
    addShareToShareholder,
    removeShareFromShareholder,
    addExistShareToShareholder
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
// TODO wrong add share to shareholder. in share.model isShare is 
// changed to true but in sharehodler.model share stay false
async function addExistShareToShareholder(shareholderId, shareId) {
    try {
        const share = await Share.findByIdAndUpdate(shareId, { isShare: true })
        await share.save()
        const shareholder = await Shareholder.findById(shareholderId)
        await shareholder.shares.push(share)
        await shareholder.save()
    } catch (error) {
        throw new Error(`addExistShareToShareholder service error: ${error}`)
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
    // console.log('share', shareId);
    // console.log('shareholderId', shareholderId);
    try {
        // const shareholder = await Shareholder.findByIdAndUpdate(shareholderId,
        //     { $pull: { 'shares': { shareId } } },
        //     { safe: true })
        const shareholder = await Shareholder.findById(shareholderId)
        
        shareholder.shares = shareholder.shares.filter(item => 
        item._id != shareId)

        await shareholder.save()

        await Share.findByIdAndUpdate(shareId, { isShare: false })

    } catch (error) {
        throw new Error(`removeShareFromShareholder service error: ${error}`)
    }
}