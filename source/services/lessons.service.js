const lessons = require('../database/lessons.json');
const contentsOfLessons = require('../database/contentsOfLesson.json')

const getAllLessonsOfSubjects = (subjectId) => {
    const findLessons = lessons.filter(
        (value) => value.subjectId == subjectId
    );
    if (findLessons.length <= 0){
        return `Предмета по id-${subjectId} не найдено.`
    }else {
        return findLessons
    }
}

const getContentOfLessons = (subjectId,contentsId) => {
    const findLessons = lessons.filter(
        (value) => (value.subjectId == subjectId && value.contentsId == contentsId)
    );
    if (findLessons.length <= 0){
        return 'Not found'
    }else {
        return findLessons
    }
}

module.exports = {
    getAllLessonsOfSubjects,
    getContentOfLessons
}