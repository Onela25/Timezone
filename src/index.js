doocument.getElementById('city-select').addEventListener('change',function() {
let selectedCity = tis.value;
let currentTime = moment().tz(selectedCity).format('dddd,MMMM D,YYYY h:mm A');
alert(`It is ${currentTime} in ${selectedCity}`);
});