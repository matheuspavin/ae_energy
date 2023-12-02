import emissionCalculatorHandler from "../handlers/EmissionCalculatorHandler.js";

export const routes = [
    {
        method: 'get',
        path: '/emissions/:emissionType',
        middleware: [],
        query: {
            startDate: { type: 'string' },
            endDate: { type: 'string' }
        },
        handler: emissionCalculatorHandler
    }
];

export default routes;