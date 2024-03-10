"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyFilters = void 0;
const applyFilters = (data, filters) => {
    if (!filters.length)
        return data;
    let matchedSubmissions = [];
    data.forEach((submission) => {
        const question = submission.questions.find((q) => q.id === filters[0].id);
        filters.forEach((filter) => {
            if (!question || question.value === null)
                return false;
            switch (filter.condition) {
                case 'greater_than':
                    if (typeof question.value === 'number' &&
                        typeof filter.value === 'number' &&
                        question.value > filter.value) {
                        matchedSubmissions.push(question);
                    }
                    break;
                case 'less_than':
                    if (typeof question.value === 'number' &&
                        typeof filter.value === 'number' &&
                        question.value < filter.value) {
                        matchedSubmissions.push(question);
                    }
                    break;
                case 'equals':
                    if (question.value === filter.value) {
                        matchedSubmissions.push(question);
                    }
                    break;
                case 'does_not_equal':
                    if (question.value !== filter.value) {
                        matchedSubmissions.push(question);
                    }
                    break;
                default:
                    return false;
            }
        });
    });
    return matchedSubmissions;
};
exports.applyFilters = applyFilters;
//# sourceMappingURL=filterService.js.map