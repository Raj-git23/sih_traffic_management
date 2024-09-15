function initMap() {
    var defaultLocation = { lat: 28.7500, lng: 77.1175 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: defaultLocation,
        mapId: 'DEMO_MAP_ID', // Replace with your map ID if needed
        styles: [] // Ensure styles are set to an empty array or default
    });

    var trafficLayer = new google.maps.TrafficLayer();
    trafficLayer.setMap(map);

    // Function to place the marker at a given position
    function placeMarker(position) {
        new google.maps.marker.AdvancedMarkerElement({
            map: map,
            position: position,
            title: "Hello World!",
        });
    }

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                var userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                map.setCenter(userLocation);  // Center map to user's location
                placeMarker(userLocation);    // Place marker at user's location
            },
            function () {
                // If geolocation fails, place the marker at the default location
                placeMarker(defaultLocation);
                alert('Error: The Geolocation service failed.');
            }
        );
    } else {
        // If browser doesn't support geolocation, place the marker at the default location
        placeMarker(defaultLocation);
        alert('Error: Your browser doesn\'t support geolocation.');
    }
}
