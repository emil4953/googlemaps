 var map;

        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                center: {
                    lat: 55.687124,
                    lng: 12.594929
                },
                zoom: 15
            });


            var marker = new google.maps.Marker({
                position: {
                    lat: 55.706398,
                    lng: 12.597637
                },
                map: map,
                title: 'Gefionspringvandet'
            });


            marker.addListener('click', function() {
                map.setZoom(20);
                map.setCenter(marker.getPosition());
                infowindow.open(map, marker);
            });

            var marker = new google.maps.Marker({
                position: {
                    lat: 55.691586,
                    lng: 12.594290
                },
                map: map,
                title: 'Kastellet'
            });

            var marker = new google.maps.Marker({
                position: {
                    lat: 55.688348,
                    lng: 12.596239
                },
                map: map,
                title: 'Churchill Parken'
            });

            var marker = new google.maps.Marker({
                position: {
                    lat: 55.688309,
                    lng: 12.596582
                },
                map: map,
                title: 'Major Anders Lassen'
            });

            var marker = new google.maps.Marker({
                position: {
                    lat: 55.688361,
                    lng: 12.596541
                },
                map: map,
                title: 'Jagerpilot Kaj Birksted'
            });

            var marker = new google.maps.Marker({
                position: {
                    lat: 55.688308,
                    lng: 12.599276
                },
                map: map,
                title: 'Holmen'
            });

            var marker = new google.maps.Marker({
                position: {
                    lat: 55.683822,
                    lng: 12.595420
                },
                map: map,
                title: 'Amaliehaven'
            });

            var marker = new google.maps.Marker({
                position: {
                    lat: 55.684228,
                    lng: 12.593064
                },
                map: map,
                title: 'Amalienborg'
            });

            var marker = new google.maps.Marker({
                position: {
                    lat: 55.682293,
                    lng: 12.588741
                },
                map: map,
                title: 'Kong Christian d. 10'
            });

            var marker = new google.maps.Marker({
                position: {
                    lat: 55.680649,
                    lng: 12.587530
                },
                map: map,
                title: 'Mindeankeret'
            });

            var marker = new google.maps.Marker({
                position: {
                    lat: 55.681098,
                    lng: 12.585590
                },
                map: map,
                title: 'Kongens Nytorv'
            });

            var marker = new google.maps.Marker({
                position: {
                    lat: 55.683687,
                    lng: 12.580404
                },
                map: map,
                title: 'Kongens Have'
            });
        }
