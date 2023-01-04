const axios = require("axios");
const logger = require("../utils/winston")


async function makeGetCall(URL, headers = {}) {
    try {
        const result = await axios.get(URL, {
            headers: headers
        });
        return result.data;
    } catch (error) {
        logger.error(`Error in get axios - staus = ${error.response.status}, error - ${error.response.data}.`)
        return false
    }
}

function getDiscountAmount(cp, discount) {
    try {
        const result = Number(Math.round((cp * (discount / 100)) + 'e2') + 'e-2')
        return result
    } catch (error) {
        return false
    }
}

function extractShippingObject(weight, distance, data) {
    try {
        let result = {}
        for (const element of data) {
            const data = element
            if (data.distanceTo) {
                if (distance > data.distanceFrom && distance <= data.distanceTo) {
                    if (data.weightTo) {
                        if (weight > data.weightFrom && weight <= data.weightTo) {
                            result = data
                        }
                    } else {
                        if (weight > data.weightFrom && data.weightTo == null) {
                            result = data
                        }
                    }
                }
            } else {
                if (distance > data.distanceFrom && data.distanceTo == null) {
                    if (data.weightTo) {
                        if (weight > data.weightFrom && weight <= data.weightTo) {
                            result = data
                        }
                    } else {
                        if (weight > data.weightFrom && data.weightTo == null) {
                            result = data
                        }
                    }
                }

            }
        }
        return result;
    } catch (error) {
        return false
    }
}
module.exports = {
    makeGetCall,
    getDiscountAmount,
    extractShippingObject
};