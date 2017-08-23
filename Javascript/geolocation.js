    /*Justin Roohparvar
    ICT-4510
    7/12/2017
    Determines your location based on lattitude and longitude.
    Calculates distance between you and the University of Denver
    */

    var map;
      function showlocation() {
            // One-shot position request.
            navigator.geolocation.getCurrentPosition(callback);
        }

        function callback(position) {

            var lat = position.coords.latitude;
            var lon = position.coords.longitude;

            document.getElementById('latitude').innerHTML = lat;
            document.getElementById('longitude').innerHTML = lon;

            var latLong = new google.maps.LatLng(lat, lon);

            var marker = new google.maps.Marker({
                position: latLong
            });

            marker.setMap(map);
            map.setZoom(8);
            map.setCenter(marker.getPosition());
        }

      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 39.678121, lng: 104.961753 },
          zoom: 8
        });
      }