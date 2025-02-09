// $(document).ready(function(){
//     /*====================================
//         Google Map JS
//     ======================================*/  
//     (function(){
//         var map;
//         map = new GMaps({
//             el: '#myMap',
//             lat: 18.595867,
//             lng: 73.7720908,
//             scrollwheel: false,
//             zoom: 17,
//             zoomControl: true,
//             panControl: false,
//             streetViewControl: true,
//             mapTypeControl: false,
//             overviewMapControl: false,
//             clickable: false
//         });

//         var image = 'img/map-marker.png'; // Custom marker icon
//         map.addMarker({
//             lat: 18.595867,
//             lng: 73.7720908,
//             title: "Divine Homeopathy and Cosmetic Clinic",
//             icon: image,
//             animation: google.maps.Animation.DROP,
//             infoWindow: {
//                 content: '<h4>Divine Homeopathy and Cosmetic Clinic</h4><p>Visit us for the best homeopathy & cosmetic treatments.</p>'
//             }
//         });

//         var styles = [
//             {
//                 "featureType": "road",
//                 "stylers": [{ "color": "#ffffff" }]
//             },
//             {
//                 "featureType": "water",
//                 "stylers": [{ "color": "#bde5f6" }]
//             },
//             {
//                 "featureType": "landscape",
//                 "stylers": [{ "color": "#f2f2f2" }]
//             },
//             {
//                 "elementType": "labels.text.fill",
//                 "stylers": [{ "color": "#FF7550" }]
//             },
//             {
//                 "featureType": "poi",
//                 "stylers": [{ "color": "#e2f0cd" }]
//             },
//             {
//                 "elementType": "labels.text",
//                 "stylers": [
//                     { "saturation": 2 },
//                     { "weight": 0.3 },
//                     { "color": "#a8a8a8" }
//                 ]
//             }
//         ];

//         map.addStyle({
//             styledMapName: "Styled Map",
//             styles: styles,
//             mapTypeId: "map_style"
//         });

//         map.setStyle("map_style");
//     })();
// });



  // Initialize the map
  var map = L.map('myMap', {
	center: [18.595867, 73.7720908],
	zoom: 17,
	scrollWheelZoom: false // Disable scroll zoom (optional)
});

// Load OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a custom marker with popup
var marker = L.marker([18.595867, 73.7720908]).addTo(map)
	.bindPopup('<b>Divine Homeopathy and Cosmetic Clinic</b><br>Visit us for expert homeopathy & cosmetic treatments.')
	.openPopup();

// Add zoom control buttons in the bottom-right corner
L.control.zoom({
	position: 'bottomright'
}).addTo(map);

// Add full-screen control button
map.addControl(new L.Control.Fullscreen({
	position: 'topright', // Position of the full-screen button
	title: {
		'false': 'View Fullscreen',
		'true': 'Exit Fullscreen'
	}
}));