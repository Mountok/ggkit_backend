const Router = require('express');
const router = new Router();
const subjectsController = require('../controllers/subjects.controller');
const lessonsController = require('../controllers/lessons.controller');

router.get('/subjects',subjectsController.getAllSubjects);
router.get('/lessons/:subjectId',lessonsController.getAllLessonOfSubjects);
router.get('/lessons/:subjectId/:contentId',lessonsController.getContentOfLessons);


module.exports = router;