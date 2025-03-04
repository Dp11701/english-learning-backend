import express from "express";
import {
  getDailyVocabulary,
  updateDailyVocabulary,
  getUnlearnedWords,
} from "../controllers/dailyVocabulary.controller";
import authMiddleware from "../middlewares/authMiddleware";

const router = express.Router();

router.get("/", authMiddleware, getDailyVocabulary as any);
router.get("/unlearned", authMiddleware, getUnlearnedWords as any);
router.put("/", authMiddleware, updateDailyVocabulary as any);

export default router;
