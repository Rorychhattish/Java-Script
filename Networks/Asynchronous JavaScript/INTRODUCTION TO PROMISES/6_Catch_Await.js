// Goal: Catch an Error
// If an error is thrown in any of the asynchronous functions we called in the last stage, let's catch it.
// Once we have the exception, pass it to logError.



const { getResults } = require('./lab');
const { sendResults } = require('./messaging');
const { logResponse, logError } = require('./logs');

async function handleResults(patientId) {
    try{
        // 1. Lab bata results line (await garne)
        const results = await getResults(patientId);
        // 2. Patient lai results pathaune (Id ra results sequence dhyan dine)
        const response = await sendResults(patientId, results);
        // 3. Response lai logs ma record garne
        await logResponse(response);
    }catch (error) {
        // 4. Mathi ko kunai pani step ma error aayo vane logError ma pathaune
        await logError(error);
    }
}
module.exports = handleResults;