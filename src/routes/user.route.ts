import {Router} from "express";
import {
    createUserCtrl,
    deleteUserCtrl,
    getAllUsersCtrl,
    getUserByIdCtrl,
    updateUserCtrl
} from "../controller/user.controller";

const router = Router();

router.get('/', getAllUsersCtrl);
router.get('/:id', getUserByIdCtrl);
router.post('/', createUserCtrl);
router.put('/:id', updateUserCtrl);
router.delete('/:id', deleteUserCtrl);
export default router;