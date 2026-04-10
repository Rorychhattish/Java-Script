// Goal: Sort the Events
// Given the array of events, sort them by the month that they occur in and return the sorted array.
// Each object in the events array will have properties event and month just like in the example shown above.
//  To find which events comes first, you'll need to see where it belongs in the MONTHS array. You can use the array indexOf method to find where it belongs.



const MONTHS = [
    'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
    'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
];

function sortByMonth(events) {
    return events.sort((a, b) => {
        const indexA = MONTHS.indexOf(a.month);
        const indexB = MONTHS.indexOf(b.month);
        return indexA - indexB;
    });
}

module.exports = sortByMonth;