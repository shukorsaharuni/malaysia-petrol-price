import express from "express";
import { historyList } from "./petrol.controller.js";
 
 const router = new express.Router();
 
 router.get('/history',historyList);
 
 export default router;