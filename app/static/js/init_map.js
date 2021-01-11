// GOOGLE MAPS SETUP: Javascript API //

// Gmap elements
var map = {};
var marker = {};
var infowindow = {};

// Function called when page has been loaded
function initMap() {
    
    coord = {lat: 48.856614, lng: 2.3522219} // initial coord displayed on the page
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: coord,
        mapTypeId: google.maps.MapTypeId.ROADMAP

        
    });
    
    marker = new google.maps.Marker({
        position: coord,
        map: map
    });
   
   infowindow = new google.maps.InfoWindow(); 
}


// function called to actualise map with new coordinates
function actualise_map(latitude, longitude, address) {
  
  
  infowindow.setContent(address);
  coord = {lat: latitude, lng: longitude};
  map.panTo(coord);
  marker.addListener('position_changed', function() {
    infowindow.close();
    infowindow.open(map, marker);
  })
  marker.setPosition(coord);
  marker.setAnimation(google.maps.Animation.BOUNCE);

  marker.addListener('click', function() {
          
          infowindow.open(map, marker);
        });


  map.setZoom(15)

}