import simpleRes from "../../../jsonRes/simpleRes.js";

export const helloHandler = (req, res) => {
    res.send(JSON.stringify(simpleRes));
}


export default helloHandler;