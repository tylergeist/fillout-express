"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const responsesController_1 = require("../controllers/responsesController");
const router = (0, express_1.Router)();
router.get('/:formId/filteredResponses', responsesController_1.getFilteredResponses);
exports.default = router;
//# sourceMappingURL=responsesRoutes.js.map