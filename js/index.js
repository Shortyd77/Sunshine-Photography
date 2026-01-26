(function() {
    // PART ONE: 25% OFFER EXPIRY
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

    // PART TWO: PRICING LOOP
    var photos = [5, 10, 15, 20]; 
    var pricePerPhoto = 15;   
    var tableHTML = '<table><tr><th>Photos</th><th>Price</th></tr>';

    for (var i = 0; i < photos.length; i++) {
        var rowTotal = photos[i] * pricePerPhoto;
        tableHTML += '<tr><td>' + photos[i] + ' Digital Images</td><td>$' + rowTotal + '</td></tr>';
    }
    tableHTML += '</table>';
    
    var pricingTableEl = document.getElementById('pricingTable');
    if (pricingTableEl) {
        pricingTableEl.innerHTML = tableHTML;
    }

    // PART THREE: THE DECISION
    var selectedForQuote = 20;
    var bonusMsg = "";

    if (selectedForQuote >= 20) {
        bonusMsg = "<strong>Elite Choice:</strong> Booking 20+ photos unlocks a custom filter!";
    } else { 
        bonusMsg = "Book 20 photos to unlock custom color grading.";
    }
    
    var bulkBonusEl = document.getElementById('bulkBonus');
    if (bulkBonusEl) {
        bulkBonusEl.innerHTML = bonusMsg;
    }
}()); // This closing part is very important!
