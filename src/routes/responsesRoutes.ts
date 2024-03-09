import { Router } from 'express';
import { getFilteredResponses } from '../controllers/responsesController';
const router = Router();

router.get('/:formId/filteredResponses', getFilteredResponses);

export default router;
