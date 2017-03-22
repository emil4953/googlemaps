 var map;

 var data;

 var locationMarker;

 function initMap() {

     console.log("Init map")

     // lav et kort
     map = new google.maps.Map(document.getElementById('map'), {
         center: {
             lat: 55.687124,
             lng: 12.594929
         },
         zoom: 15

     });

     var bounds = {
         north: 55.69526873596324,
         south: 55.680221625302735,
         east: 12.606046617962647,
         west: 12.573817194439698
     }


     var overlay = new google.maps.GroundOverlay('overlay-01.svg', bounds);
     overlay.setMap(map);


     var overlay = new google.maps.GroundOverlay('birk-01.svg', bounds);
     overlay.setMap(map);

     var overlay = new google.maps.GroundOverlay('church-01.svg', bounds);
     overlay.setMap(map);

     var overlay = new google.maps.GroundOverlay('water-01.svg', bounds);
     overlay.setMap(map);

     var overlay = new google.maps.GroundOverlay('waterfall-01.svg',
         bounds);
     overlay.setMap(map);

     var overlay = new google.maps.GroundOverlay('stjerne-01.svg', bounds);
     overlay.setMap(map);

     var overlay = new google.maps.GroundOverlay('borg1-01.svg', bounds);
     overlay.setMap(map);

     var overlay = new google.maps.GroundOverlay('10-01.svg', bounds);
     overlay.setMap(map);

     var overlay = new google.maps.GroundOverlay('mindeanker-01.svg', bounds);
     overlay.setMap(map);


     var overlay = new google.maps.GroundOverlay('torv-01.svg',
         bounds);
     overlay.setMap(map);

     var overlay = new google.maps.GroundOverlay('haven-01.svg', bounds);
     overlay.setMap(map);

     var overlay = new google.maps.GroundOverlay('samletkort-01.svg', bounds);
     overlay.setMap(map);

     locationMarker = new google.maps.Marker({
         position: {
             lat: 55.689063,
             lng: 12.597257
         },
         map: map,
         animation: google.maps.Animation.DROP
             // TODO: Sæt et særligt ikon for denne marker
     });

     $.getJSON("data.json", dataErHentet);
     console.log("henter data ...");

 }

 // indlæs JSON-fil
 //$.getJSON("data.json", dataErHentet);

 function dataErHentet(jdata) {
     data = jdata;

     console.log("Data er hentet");
     console.table(data);

     // bladr igennem JSON-data
     data.forEach(visData);

     //  data.personer.forEach(visPerson);

     // her sættes linjen med watchPosition ind
     id = navigator.geolocation.watchPosition(success, error, options);
 }

 var id, target, options;

 function success(pos) {
     var crd = pos.coords;

     var currentPosition = new google.maps.LatLng(crd.latitude, crd.longitude);

     console.log("Currentposition: " + currentPosition);

     map.setCenter(currentPosition);

     locationMarker.setPosition(currentPosition);

     data.forEach(function (punkt) {
         console.log("hej med dig");

         if (punkt.type == "quiz") {

             var marker = punkt.marker;

             var dist = google.maps.geometry.spherical.computeDistanceBetween(marker.position, currentPosition);

             if (dist < 70) {
                 console.log("Tæt på (" + dist + "m) " + punkt.navn);

                 //        if (markerElement != null) {
                 marker.setVisible(true);
                 marker.setClickable(true);
                 //      } else {
                 //         if (markerElement != null) {
                 //             marker.setVisible(false);
                 //             marker.setClickable(false);
                 //         }
             } else {
                 marker.setVisible(false);
                 marker.setClickable(false);
             }
         }

     });
 }

 function error(err) {
     console.warn('ERROR(' + err.code + '): ' + err.message);
 }

 target = {
     latitude: 0,
     longitude: 0
 };

 options = {
     enableHighAccuracy: true,
     timeout: 5000,
     maximumAge: 0
 };

 function visData(punkt) {
     console.log(punkt);
     // for hver punkt i JSON-filen
     // - lav en marker

     var etoverlay = new google.maps.OverlayView();
     etoverlay.draw = function () {
         this.getPanes().markerLayer.id = 'markerLayer';
     };
     etoverlay.setMap(map);



     var marker = new google.maps.Marker({
         position: punkt.position,
         map: map,
         optimized: false,
         draggable: true,
         animation: google.maps.Animation.DROP,
         title: punkt.navn

     });

     punkt.marker = marker;

     console.log("lavede en ny marker", marker);

     var infowindow = new google.maps.InfoWindow({
         position: punkt.position
     });

     // - lav en event på markeren
     marker.addListener('click', function () {

         map.setZoom(16);
         map.setCenter(marker.getPosition());

         if (punkt.type == "info") {
             var klon = document.querySelector("#infowindow_template").content.cloneNode(true);
             klon.querySelector("img").src = punkt.billede;

             // TODO: Tilføj navn og beskrivelse til klonen!
             klon.querySelector("h1").textContent = punkt.navn;
             klon.querySelector("p").textContent = punkt.beskrivelse;

         } else if (punkt.type == "quiz") {
             var klon = document.querySelector("#infowindow_quiztemplate").content.cloneNode(true);

             klon.querySelector("h2").textContent = punkt.spoergsmaal;
             klon.querySelector("h3").textContent = punkt.svar;

         }

         console.log(klon);

         infowindow.setContent(klon);

         infowindow.open(map, marker);
     });
 }

 /*
 var icon = {

     icon: {
         url: 'data:billeder/gefionspringvandet.svg;charset=UTF-8,' + encodeURIComponent(svg)
     }
     path: "M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0",
     fillColor: '#FF0000',
     fillOpacity: .6,
     anchor: new google.maps.Point(0, 0),
     strokeWeight: 0,
     scale: 1
 }

*/
 function findAlleMarkers() {
     var markerArray = document.querySelector("#markerLayer img");
     console.log("Alle markers: ", markerArray);

     if (markerArray.length == 0) {
         setTimeout(findAlleMarkers, 50);
     } else {
         markerArray.forEach(function (domElement, index) {
                 domElement.classList.add("marker");
                 domElement.classList.add(data[index].markerClass);
             }



         )
     }
 }
