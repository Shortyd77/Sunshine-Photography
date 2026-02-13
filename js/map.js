fucntion init() {
  var mapOptions = {
    center: new google.maps.LatLng(48.2931, -122.6436), // Coordinates for Oak Harbor, Wa
    mapTypeld: google.maps.MapTypeid.ROADMAP,
    Zoom:11
  };
var venueMap;
  venueMap = new google.maps.Map(document.getElementByld('map'), mapOptions);
}

function loadScript() {
  var script=document.createElement('script');
  script.src ="http://maps.googleapis.com/maps/api/js?sensor=false&callback=init';
    document.body.appendChild(script);
}

window.onload = loadScript;
