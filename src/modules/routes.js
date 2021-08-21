import express from 'express';
import core from './api/index';

const router = express.Router();
router.use('/v1', core);

export default router;
