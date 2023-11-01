var map = L.map('map').setView([40.61756999, -73.9548453459], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

fetch('nyc-data.json')
.then(response => response.json())
.then(data => {
    for (let i = 0; i < data.length; i++) {
        const latitude = data[i].Latitude;
        const longitude = data[i].Longitude;
        const descriptor = data[i].Descriptor;

      const circle = L.circle([latitude, longitude],{
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 100
        }).addTo(map);
        circle.on('mouseover', function (event) {
            this.bindPopup(descriptor).openPopup();
        })
            circle.on('mouseout', function (event) {
                this.closePopup();
    });





  
        console.log(`Latitude ${i + 1}:`, latitude);
        console.log(`Longitude ${i + 1}:`, longitude);
      }
})

.catch(error => console.error('error fetching',  error));