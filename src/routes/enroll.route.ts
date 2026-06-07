import Router from "express";
import {
    createEnrollCtrl,
    deleteEnrollCtrl,
    getAllEnrollsCtrl,
    getEnrollByIdCtrl,
    updateEnrollCtrl
} from "../controller/enroll.controller";

const router = Router();

router.get('/', getAllEnrollsCtrl);
router.get('/:id', getEnrollByIdCtrl);
router.post('/', createEnrollCtrl);
router.put('/:id', updateEnrollCtrl);
router.delete('/:id', deleteEnrollCtrl);

export default router;