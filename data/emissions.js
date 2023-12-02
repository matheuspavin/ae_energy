import * as carbonmonoxideData from './emissions.statistics.carbonmonoxide.json' assert { type: "json" };
import * as monoxideData from './emissions.statistics.carbonmonoxide.json' assert { type: "json" };
import * as nitrogendioxideData from './emissions.statistics.nitrogendioxide.json' assert { type: "json" };
import * as ozoneData from './emissions.statistics.ozone.json' assert { type: "json" };

export const carbonmonoxide = carbonmonoxideData;
export const methane = monoxideData;
export const nitrogendioxide = nitrogendioxideData;
export const ozone = ozoneData;

export default {
    carbonmonoxide,
    methane,
    nitrogendioxide,
    ozone
};