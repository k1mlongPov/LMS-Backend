import Router from "express";
import {
    createLessonCtrl,
    deleteLessonCtrl,
    getAllLessonsCtrl,
    getLessonByIdCtrl,
    updateLessonCtrl
} from "../controller/lesson.controller";

const router =Router();

router.get('/', getAllLessonsCtrl);
router.get('/:id', getLessonByIdCtrl);
router.post('/', createLessonCtrl);
router.put('/:id', updateLessonCtrl);
router.delete('/:id', deleteLessonCtrl);

export default router;