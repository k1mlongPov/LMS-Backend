import {Router} from "express";
import {
    createCourseCtrl, deleteCourseCtrl,
    getAllCoursesCtrl,
    getCourseByIdCtrl,
    updateCourseCtrl
} from "../controller/course.controller";

const router = Router();

router.get('/', getAllCoursesCtrl);
router.get('/:id', getCourseByIdCtrl);
router.post('/', createCourseCtrl);
router.put('/:id', updateCourseCtrl)
router.delete('/:id', deleteCourseCtrl);

export default router;