import express from "express";
import { isLoggedIn } from "../middlewares/middleware.js";
import { newPortfolio } from "../controllers/postController.js";
import multer from 'multer';
import { show } from "../controllers/getController.js";
const upload = multer({ dest: 'uploads/' });

const router = express.Router();

router.post('/new-portfolio', upload.single('image'),isLoggedIn,newPortfolio);
router.get("/portfolio/:id",show);

export default router;
