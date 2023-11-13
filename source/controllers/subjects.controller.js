const subjects = require('../database/subjects.json')

const subjectService = require('../services/subjects.service')



const getAllSubjects = async (req,res) => {
    const allSubjects = subjectService.getAllSubjects(subjects);
    res.json({
        status: 'OK',
        date: allSubjects
    })
}


module.exports = {
    getAllSubjects,
};