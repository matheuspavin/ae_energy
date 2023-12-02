import emissions from '../../../data/emissions.js';

export const getEmissionData = function (emissionType) {
    switch (emissionType) {
        case 'carbonmonoxide':
            return emissions.carbonmonoxide;
        case 'methane':
            return emissions.methane;
        case 'nitrogendioxide':
            return emissions.nitrogendioxide;
        case 'ozone':
            return emissions.ozone;
        default:
            return emissions.carbonmonoxide;
    }
}

export const getEmissionDataByInterval = function (emissionType, interval) {
    const emissionData = getEmissionData(emissionType);
    if (interval.length === 2) {
        if (!isNaN(Date.parse(interval[0])) && !isNaN(Date.parse(interval[1]))) {
            return emissionData;
        } else {
            return emissionData;
        }
    } else {
        return emissionData;
    }

    //TODO - implement error instead of returning the data
}


    export default getEmissionData;