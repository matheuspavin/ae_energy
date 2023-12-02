import emissionCalculatorHandler from "../handlers/EmissionCalculatorHandler.js";

export const routes = [
    {
        method: 'get',
        path: '/emissions/:emissionType',
        middleware: [],
        handler: emissionCalculatorHandler
    }
];

export default routes;