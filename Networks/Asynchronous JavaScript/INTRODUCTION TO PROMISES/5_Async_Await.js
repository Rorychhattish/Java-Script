// Goal: Relay the Results
// We have a function handleResults which should retrieve a patient's results from a lab, send them to the patient, and record the response in logs.
// The three functions have been imported for you. Each function returns a promise, so it can be used with async/await. You'll need to call these in order:
// Pass the patientId to getResults. This will resolve with results.
// Pass the patientId and results (in that order) to sendResults. This will resolve with response.
// Pass the response to logResponse. There is no return value here. You can choose to either return the promise from logResponse or use await so the function will not resolve until after logResponse is complete.
//  Notice that the async keyword has already been added to the handleResults function. This will allow us to use await within the function.



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