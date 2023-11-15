
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 41.598053655068185, lng: -87.56525859451041},
    zoom: 12,
  });
  
  var maker = new google.maps.Marker({
    position: { lat: 41.598053655068185, lng: -87.56525859451041},
    map: map,
  });
  
  var infowindow = new google.maps.InfoWindow({
    content: "My Summer Internship",
  });
  infowindow.open(map, marker);
  
  const icons = {
    Wilder Fields: {
      icon: "../media/wilder.jpg",
    },
  };
  
  var features = [
    { position: { lat: 41.59, lng: -87.56 }, type: "gardencenter" },
  ];
  
  for (let i = 0; i < features.length; i++) {
    const marker = new google.maps.Marker({
      position: features[i].position,
      icon: icons[features[i].type].icon,
      map: map,
    });
  }
}
  
  google.maps.event.addDomListener(window, 'load', initMap);