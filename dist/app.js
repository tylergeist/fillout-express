"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const responsesRoutes_1 = __importDefault(require("./routes/responsesRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send('Fillout test API success.');
});
app.use('/api', responsesRoutes_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map