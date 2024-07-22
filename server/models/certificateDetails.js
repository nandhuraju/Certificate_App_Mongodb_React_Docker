const { Schema } = require('mongoose')
const { model } = require('mongoose')
const demo = new Schema({
    certiId: { type: String, required: true },
    candName: { type: String, required: true },
    courseName: { type: String, required: true },
    grade: { type: String, required: true },
    date: { type: String, required: true }
})

const certificateDetails = model('certificateDetails', demo) 
module.exports = certificateDetails