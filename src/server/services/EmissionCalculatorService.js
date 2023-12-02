import emissions from '../../../data/emissions.js';

export const getEmissionData = function (emissionData) {
    console.log('aqui')
    switch (emissionData) {
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

export default getEmissionData;