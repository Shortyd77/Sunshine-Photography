// Get elements
var searchBox = document.getElementByld('photoSearch');
var alllmages = document.querySelectorAll('img');

// Focus Event: Changes style when user clicks in
searchBox.addEventListener('focus', function() {
  seachBox.className = 'active-search'; // Apply the pink and cream CSS
  if (searchBox.value === 'Search gallery...') {
      searchBox.value =";

  }
}, false);

// Blur Event: Resets style when user clicks away
searchBox.addEventListener('blur', function() {
  searchBox.className ="; 
    if(searchBox.value ===") {
       searchBox.value = 'Search gallery...';
  } 
},false);

// Content meanu event: Protects images on right-click 
function protect(e) {
  e.preventDefault(); //stops the menu
  alert("images are protected by Sunshine Photography.")
}

//Loop through images to add the protection
for (var i = 0; i <alllmages.length; i++) {
  alllmages[i].addEventListener('contextmenu', protect, false);
}

                           

                          
