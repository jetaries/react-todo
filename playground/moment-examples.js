var moment = require('moment');

console.log(moment().format());

// Jan. 1st 1970 @ 12:00am -> 0
// Jan. 1st 1970 @ 12:01am -> 60
var now = moment();
console.log('current timestamp', now.unix());

var timestamp = 1503132015;
var currentMoment = moment.unix(timestamp);
console.log('current moment', currentMoment.format());

console.log('current moment', currentMoment.format('MMM D, YY @ H:mm a'));

// January 3rd, 2016 @ 12:13 AM
console.log('current moment', currentMoment.format('MMMM Do, Y @ H:mm A'));