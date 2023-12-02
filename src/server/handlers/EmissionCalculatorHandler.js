import getEmissionData from "../services/EmissionCalculatorService.js";

const emissionCalculatorHandler = (req, res) => {
    res.send(JSON.stringify(getEmissionData(req.params.emissionType)));
}


export default emissionCalculatorHandler;