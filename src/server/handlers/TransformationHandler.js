import { transformation } from '../services/TransformationService.js';

export const transformationHandler = (req, res) => {
    const transformed = transformation(req.body);
    res.send(JSON.stringify(transformed));
}

export default transformationHandler;