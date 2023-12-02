import getEmissionData, { getEmissionDataByInterval } from "../services/EmissionCalculatorService.js";

const emissionCalculatorHandler = (req, res) => {
    if (req.query.startDate && req.query.endDate) {
        res.send(JSON.stringify(getEmissionDataByInterval(req.params.emissionType, [req.params.startDate, req.params.endDate])));
    } else {
    res.send(JSON.stringify(getEmissionData(req.params.emissionType)));
    }
}

export default emissionCalculatorHandler;