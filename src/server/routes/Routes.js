import helloHandler from "../handlers/SimpleHandler.js";

export const routes = [
    {
        method: 'get',
        path: '/',
        handler: helloHandler
    }
];


export default routes;