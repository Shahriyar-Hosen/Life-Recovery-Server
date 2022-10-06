import express from "express";
import { createNamaz, getNamazs, updateNamaz } from "../controllers/namaz.js";

const router = express.Router();

//CREATE
router.post("/", createNamaz);

//UPDATE
router.put("/:id", updateNamaz);

//UPDATE
router.get("/", getNamazs);

export default router;
