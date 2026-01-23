/* the script is placed inside an immediately invoked function expression which helps protect the scope of variables */

/* the script is placed inside an immediately invoked function expression which helps protect the scope of variables */
(function() {
    // PART ONE: OFFER EXPIRY LOGIC
    var expiryMsg; 
    var today;
    var elEnds;

    function offerExpires(today) {
        var weekFromToday, day, date, month, year, dayNames, monthNames;
        weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
        dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        day = dayNames[weekFromToday.getDay()];
        date = weekFromToday.getDate();
        month = monthNames[weekFromToday.getMonth()];
        year = weekFromToday.getFullYear();

        expiryMsg = '25% off when you book your first photoshoot! ';
        expiryMsg += 'Offer expires next ' + day + ' <br />(' + month + ' ' + date + ' ' + year + ')';
        return expiryMsg;
    }

    today = new Date(); 
    elEnds = document.getElementById('offerEnds'); 
    if (elEnds) {
        elEnds.innerHTML = offerExpires(today);
    }

    // PART TWO: PRICING TABLE (LOOP & DECISION)
    var photos = [5, 10, 15, 20]; 
    var pricePerPhoto = 15;   
    var tableHTML = '<table><tr><th>Photos</th><th>Price</th></tr>';

    // The Loop: Generates the rows of the table
    for (var i = 0; i < photos.length; i++) {
        var rowTotal = photos[i] * pricePerPhoto;
        tableHTML += '<tr><td>' + photos[i] + ' Digital Images</td><td>$' + rowTotal + '</td></tr>';
    }
    tableHTML += '</table>';
    
    var pricingTableEl = document.getElementById('pricingTable');
    if (pricingTableEl) {
        pricingTableEl.innerHTML = tableHTML;
    }

    // THE DECISION: Apply a message if a certain number is met
    var selectedForQuote = 20;
    var bonusMsg = "";

    if (selectedForQuote >= 20) {
        bonusMsg = "<strong>Elite Choice:</strong> Booking 20+ photos unlocks a custom 'Golden Hour' filter for your gallery!";
    } else { 
        bonusMsg = "Book 20 photos to unlock custom color grading.";
    }
    
    var bulkBonusEl = document.getElementById('bulkBonus');
    if (bulkBonusEl) {
        bulkBonusEl.innerHTML = bonusMsg;
    }

}());












    

}());
