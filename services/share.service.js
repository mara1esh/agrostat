const mongoose = require('mongoose')
const Share = mongoose.model('Share')

module.exports = {
    addShare,
    editShare,
    removeShare,
    getShareById,
    getShares,
    getFreeShares
}

 async function addShare(newShare) {
     let item = new Share()
     
     item.square = newShare.square
     item.code = newShare.code || null
     item.contractUntil = newShare.contractUntil || null
     item.isShare = newShare.isShare || false

    try {
        await item.save()
        return item
    } catch (error) {
        throw new Error(`addShare error: ${error}`)
    }
}

async function editShare(id, newData) {
    try {
        await Share.findByIdAndUpdate(id, newData)
    } catch (error) {
        throw new Error(`updateShare service error: ${error}`)
    }
}

async function removeShare(id) {
    try {
        await Share.findByIdAndDelete(id)
    } catch (error) {
        throw new Error(`updateShare service error: ${error}`)
    }
}

async function getShareById(id) {
    try {
        // console.log(id);
        const share = await Share.findById(id)
        // console.log(share);
        return share
    } catch (error) {
        throw new Error(`getShareById service error: ${error}`)
    }
}

async function getShares() {
    try {
        const shares = await Share.find()
        return shares
    } catch (error) {
        throw new Error(`getShares service error: ${error}`)
    }
}

async function getFreeShares() {
    try {
        const shares = await Share.find({isShare: false})
        return shares
    } catch (error) {
        throw new Error(`getShares service error: ${error}`)
    }
}