 $(document).ready(function () {
     var jData = $.getJSON("data.json");
     console.log(jData);
 });

 var map;

 function initMap() {

     // lav et kort
     map = new google.maps.Map(document.getElementById('map'), {
         center: {
             lat: 55.687124,
             lng: 12.594929
         },
         zoom: 15
     });

     // indlæs JSON-fil
     $.getJSON("data.json", dataErHentet);






     /*

          var marker = new google.maps.Marker({
              position: {
                  lat: 55.689443,
                  lng: 12.597615
              },
              map: map,
              title: 'Gefionspringvandet'
          });

          marker.addListener('click', function () {
              map.setZoom(16);
              map.setCenter(marker.getPosition());

              var klon = document.querySelector("#infowindow_template").content.cloneNode(true);
              klon.querySelector("#infowindow_template img");

              console.log(klon);


              infowindow.setContent(klon);


              infowindow.open(map, marker);
          });

          var infowindow = new google.maps.InfoWindow({
              content: "Gefionspringvandet",
              position: {
                  lat: 55.689443,
                  lng: 12.597615
              }
          });



          var marker2 = new google.maps.Marker({
              position: {
                  lat: 55.691586,
                  lng: 12.594290
              },
              map: map,
              title: 'Kastellet',
          });

          marker2.addListener('click', function () {
              map.setZoom(16);
              map.setCenter(marker2.getPosition());
              infowindow2.open(map, marker2);
          });

          var infowindow2 = new google.maps.InfoWindow({
              content: "Kastellet",
              position: {
                  lat: 55.691586,
                  lng: 12.594290
              }
          });



          var marker3 = new google.maps.Marker({
              position: {
                  lat: 55.688348,
                  lng: 12.596239
              },
              map: map,
              title: 'Churchill Parken'
          });

          marker3.addListener('click', function () {
              map.setZoom(16);
              map.setCenter(marker3.getPosition());
              infowindow3.open(map, marker3);
          });

          var infowindow3 = new google.maps.InfoWindow({
              content: "Churchill Parken",
              position: {
                  lat: 55.688348,
                  lng: 12.596239
              }
          });



          var marker4 = new google.maps.Marker({
              position: {
                  lat: 55.688309,
                  lng: 12.596582
              },
              map: map,
              title: 'Major Anders Lassen'
          });

          marker4.addListener('click', function () {
              map.setZoom(16);
              map.setCenter(marker4.getPosition());
              infowindow4.open(map, marker4);
          });

          var infowindow4 = new google.maps.InfoWindow({
              content: "Major Anders Lassen",
              position: {
                  lat: 55.688309,
                  lng: 12.596582
              }
          });



          var marker5 = new google.maps.Marker({
              position: {
                  lat: 55.688361,
                  lng: 12.596541
              },
              map: map,
              title: 'Jagerpilot Kaj Birksted'
          });

          marker5.addListener('click', function () {
              map.setZoom(16);
              map.setCenter(marker5.getPosition());
              infowindow5.open(map, marker5);
          });

          var infowindow5 = new google.maps.InfoWindow({
              content: "Jagerpilot Kaj Birksted",
              position: {
                  lat: 55.688361,
                  lng: 12.596541
              }
          });



          var marker6 = new google.maps.Marker({
              position: {
                  lat: 55.688308,
                  lng: 12.599276
              },
              map: map,
              title: 'Holmen'
          });

          marker6.addListener('click', function () {
              map.setZoom(16);
              map.setCenter(marker6.getPosition());
              infowindow6.open(map, marker6);
          });

          var infowindow6 = new google.maps.InfoWindow({
              content: "Holmen",
              position: {
                  lat: 55.688308,
                  lng: 12.599276
              }
          });



          var marker7 = new google.maps.Marker({
              position: {
                  lat: 55.683822,
                  lng: 12.595420
              },
              map: map,
              title: 'Amaliehaven'
          });

          marker7.addListener('click', function () {
              map.setZoom(16);
              map.setCenter(marker7.getPosition());
              infowindow7.open(map, marker7);
          });

          var infowindow7 = new google.maps.InfoWindow({
              content: "Amaliehaven",
              position: {
                  lat: 55.683822,
                  lng: 12.595420
              }
          });



          var marker8 = new google.maps.Marker({
              position: {
                  lat: 55.684228,
                  lng: 12.593064
              },
              map: map,
              title: 'Amalienborg'
          });

          marker8.addListener('click', function () {
              map.setZoom(16);
              map.setCenter(marker8.getPosition());
              infowindow8.open(map, marker8);
          });

          var infowindow8 = new google.maps.InfoWindow({
              content: "Amalienborg",
              position: {
                  lat: 55.684228,
                  lng: 12.593064
              }
          });



          var marker9 = new google.maps.Marker({
              position: {
                  lat: 55.682293,
                  lng: 12.588741
              },
              map: map,
              title: 'Kong Christian d. 10'
          });

          marker9.addListener('click', function () {
              map.setZoom(16);
              map.setCenter(marker9.getPosition());
              infowindow9.open(map, marker9);
          });

          var infowindow9 = new google.maps.InfoWindow({
              content: "Kong Christian d. 10",
              position: {
                  lat: 55.682293,
                  lng: 12.588741
              }
          });



          var marker10 = new google.maps.Marker({
              position: {
                  lat: 55.680649,
                  lng: 12.587530
              },
              map: map,
              title: 'Mindeankeret'
          });

          marker10.addListener('click', function () {
              map.setZoom(16);
              map.setCenter(marker10.getPosition());
              infowindow10.open(map, marker10);
          });

          var infowindow10 = new google.maps.InfoWindow({
              content: "Mindeankeret",
              position: {
                  lat: 55.680649,
                  lng: 12.587530
              }
          });



          var marker11 = new google.maps.Marker({
              position: {
                  lat: 55.681098,
                  lng: 12.585590
              },
              map: map,
              title: 'Kongens Nytorv'
          });
          marker11.addListener('click', function () {
              map.setZoom(16);
              map.setCenter(marker11.getPosition());
              infowindow11.open(map, marker11);
          });

          var infowindow11 = new google.maps.InfoWindow({
              content: "Kongens Nytorv",
              position: {
                  lat: 55.681098,
                  lng: 12.585590
              }
          });



          var marker12 = new google.maps.Marker({
              position: {
                  lat: 55.683687,
                  lng: 12.580404
              },
              map: map,
              title: 'Kongens Have'
          });

          marker12.addListener('click', function () {
              map.setZoom(16);
              map.setCenter(marker12.getPosition());
              infowindow12.open(map, marker12);
          });

          var infowindow12 = new google.maps.InfoWindow({
              content: "Kongens Have",
              position: {
                  lat: 55.683687,
                  lng: 12.580404
              }
          });
          */
 }


 function dataErHentet(data) {
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
         klon.querySelector("#infowindow_template img").src = punkt.billede;
         // TODO: Tilføj navn og beskrivelse til klonen!

         console.log(klon);


         infowindow.setContent(klon);


         infowindow.open(map, marker);
     });





 }
