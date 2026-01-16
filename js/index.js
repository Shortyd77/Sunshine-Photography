(function() {
    // 1. Create variables for the message and date details
    var expiryMsg; 
    var today;
    var elEnds;

    function offerExpires(today) {
        // Declare variables within the function
        var weekFromToday, day, date, month, year, dayNames, monthNames;

        // Add 7 days in milliseconds (7 days * 24 hours * 60 mins * 60 secs * 1000 ms)
        weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

        // Create arrays to hold the names of days and months
        dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        // Collect the parts of the date to show on the page
        day = dayNames[weekFromToday.getDay()];
        date = weekFromToday.getDate();
        month = monthNames[weekFromToday.getMonth()];
        year = weekFromToday.getFullYear();

        // Create the message
        expiryMsg = '25% off when you book your first photoshoot! ';
        expiryMsg += 'Offer expires next ' + day + ' <br />(' + month + ' ' + date + ' ' + year + ')';
        
        return expiryMsg;
    }

    today = new Date(); // Get today's date
    elEnds = document.getElementById('offerEnds'); // Find the HTML element
    elEnds.innerHTML = offerExpires(today); // Add the message to the page

}());
