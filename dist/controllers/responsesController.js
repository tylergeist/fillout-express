"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFilteredResponses = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const filterService_1 = require("../services/filterService");
const getFilteredResponses = async (req, res) => {
    const { formId } = req.params;
    const filtersString = req.query.filters;
    let filters;
    if (typeof filtersString !== 'string' || filtersString.trim() === '') {
        return res
            .status(400)
            .json({ error: 'The filters query parameter is missing or empty.' });
    }
    try {
        filters = JSON.parse(decodeURIComponent(filtersString));
    }
    catch (error) {
        console.error('Error parsing filters:', error);
        return res
            .status(400)
            .json({ error: 'Invalid JSON format for filters query parameter.' });
    }
    const apiKey = process.env.API_KEY;
    const url = `https://api.fillout.com/v1/api/forms/${formId}/submissions`;
    try {
        const response = await (0, node_fetch_1.default)(url, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error(`Error fetching responses: ${response.statusText}`);
        }
        const data = await response.json();
        const filteredSubmissions = (0, filterService_1.applyFilters)(data.responses, filters);
        res.json({
            responses: filteredSubmissions,
            totalResponses: filteredSubmissions.length,
            pageCount: 1,
        });
    }
    catch (error) {
        console.error(`Error in getFilteredResponses: ${error.message}`);
        res.status(500).json({ message: 'Failed to fetch filtered responses' });
    }
};
exports.getFilteredResponses = getFilteredResponses;
//# sourceMappingURL=responsesController.js.map