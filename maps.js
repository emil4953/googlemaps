 var map;

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

     $.getJSON("data.json", dataErHentet);
     console.log("henter data ...");

 }

 // indlæs JSON-fil
 //$.getJSON("data.json", dataErHentet);

 function dataErHentet(data) {
     console.log("Data er hentet");
     console.table(data);

     // bladr igennem JSON-data
     data.forEach(visData);

     //  data.personer.forEach(visPerson);
 }

 function visData(punkt) {
     console.log(punkt);
     // for hver punkt i JSON-filen
     // - lav en marker
     var marker = new google.maps.Marker({
         position: punkt.position,
         map: map,
         title: punkt.navn
     });

     console.log("lavede en ny marker", marker);

     var infowindow = new google.maps.InfoWindow({
         position: punkt.position
     });

     // - lav en event på markeren
     marker.addListener('click', function () {

         // - når man klikke på en marker:
         // - - klon template
         // - - sæt data fra JSON ind i klonen
         // - - sæt klonen ind i infowindow
         // - - og vis infowindow

         map.setZoom(16);
         map.setCenter(marker.getPosition());

         var klon = document.querySelector("#infowindow_template").content.cloneNode(true);
         klon.querySelector("img").src = punkt.billede;

         // TODO: Tilføj navn og beskrivelse til klonen!
         klon.querySelector("h1").textContent = punkt.navn;
         klon.querySelector("p").textContent = punkt.beskrivelse;

         console.log(klon);

         infowindow.setContent(klon);

         infowindow.open(map, marker);
     });

     /*
          function visMarker() {
              console.log(visMarker);
              marker.setMarker
          }
     */

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

     var marker = new google.maps.Marker({
         position: event.latLng,
         map: map,
         draggable: false,
         icon: icon
     });
     */
 }
