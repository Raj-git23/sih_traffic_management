function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: { lat: 28.7500, lng: 77.1175 },
        mapId: 'DEMO_MAP_ID', // Replace with your map ID if needed
        styles: [] // Ensure styles are set to an empty array or default
    });

    const marker = new google.maps.marker.AdvancedMarkerElement({
        map: map,
        position: { lat: 28.7500, lng: 77.1175 },
        title: "Hello World!",
    });

    var trafficLayer = new google.maps.TrafficLayer();
    trafficLayer.setMap(map);

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                var userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                map.setCenter(userLocation);
                new google.maps.marker.AdvancedMarkerElement({
                    map: map,
                    position: userLocation,
                });
            },
            function() {
                alert('Error: The Geolocation service failed.');
            }
        );
    } else {
        alert('Error: Your browser doesn\'t support geolocation.');
    }
}
