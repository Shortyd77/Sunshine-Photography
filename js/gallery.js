// Get elements
var searchBox = document.getElementById('photoSearch');
var allImages = document.querySelectorAll('img');

// Focus Event: Changes style when user clicks in
searchBox.addEventListener('focus', function() {
  searchBox.className = 'active-search'; // Apply the pink and cream CSS
  if (searchBox.value === 'Search gallery...') {
      searchBox.value ="";
 }
}, false);

// Blur Event: Resets style when user clicks away
searchBox.addEventListener('blur', function() {
  searchBox.className =""; 
    if(searchBox.value ==="") {
       searchBox.value = 'Search gallery...';
  } 
},false);

// Content meanu event: Protects images on right-click 
function protect(e) {
  e.preventDefault(); //stops the menu
  alert("Images are protected by Sunshine Photography.")
}

//Loop through images to add the protection
for (var i = 0; i <allImages.length; i++) {
  allImages[i].addEventListener('contextmenu', protect, false);
}

                           

                          
