const lessonsService = require('../services/lessons.service')



const getAllLessonOfSubjects = async (req,res) => {
    const {
        params: {subjectId}
    } = req;
    const allLessons = lessonsService.getAllLessonsOfSubjects(subjectId)

    res.json({
        status: 'OK',
        data: allLessons
    })
    
}

const getContentOfLessons = async (req,res) => {
    const {
        params: {subjectId,contentId}
    } = req;
    const contentOfLesson = lessonsService.getContentOfLessons(subjectId,contentId)
    res.json({
        status: 'OK',
        data: contentOfLesson
    })
}

module.exports = {
    getAllLessonOfSubjects,
    getContentOfLessons
}