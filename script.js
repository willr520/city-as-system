var map = L.map('map').setView([40.61756999, -73.9548453459], 11);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    opacity:0.75,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);



fetch('nyc-data.json')
.then(response => response.json())
.then(data => {

    let markers = [];
    
    document.getElementById('overall').addEventListener('click', function() {

        const colorMap = {
            'Loud Music/Party':'#FF3B24',
            'Banging/Pounding': '#00A079',
            'Loud Talking': '#3D00A0',
            'Car/Truck Music': '#BB0096',

        }


        markers.forEach(marker => {
            map.removeLayer(marker);
        });
        markers = [];

    for (let i = 0; i < data.length; i++) {

        const latitude = data[i].Latitude;
        const longitude = data[i].Longitude;
        const descriptor = data[i].Descriptor;
        const color = colorMap[descriptor] || '#656565';

        if (latitude === null || longitude === null) {
           
            continue;
          }

      const circle = L.circle([latitude, longitude],{
            color: 'none',
            fillColor: color,
            fillOpacity: .75,
            radius: 70,
        }).addTo(map);

        circle.on('mouseover', function (event) {
            this.bindPopup(descriptor).openPopup();
        });
            circle.on('mouseout', function (event) {
                this.closePopup();
    });

    markers.push(circle);



  
        console.log(`Latitude ${i + 1}:`, latitude);
        console.log(`Longitude ${i + 1}:`, longitude);
      }
})

document.getElementById('sixnineam').addEventListener('click', function(){


    const colorMap = {
        'Loud Music/Party':'#FF3B24',
        'Banging/Pounding': '#00A079',
        'Loud Talking': '#3D00A0',
        'Car/Truck Music': '#BB0096',
        
    }

    markers.forEach(marker => {
        map.removeLayer(marker);
    });
    markers = [];

    for (let i =0; i <data.length; i++) {
        const latitude = data[i].Latitude;
        const longitude = data[i].Longitude;
        const descriptor = data[i].Descriptor;
        const createdDate = data[i]['Created Date'];
        const color = colorMap[descriptor] || '#656565';

        const timeString = createdDate.split(' ')[1];
        const time = new Date('1970-01-01T' + timeString + 'Z');

        if (latitude !== null && longitude !== null && time.getHours() >= 6 && time.getHours() < 9) {
          const circle = L.circle([latitude, longitude],{
            color: 'none',
            fillColor: color,
            fillOpacity: .75,
            radius: 70,
        }).addTo(map);

        circle.on('mouseover', function (event) {
            this.bindPopup(descriptor).openPopup();
        });
            circle.on('mouseout', function (event) {
                this.closePopup();
    });
    markers.push(circle);
    }
}
})

document.getElementById('ninetwelvepm').addEventListener('click', function(){


    const colorMap = {
        'Loud Music/Party':'#FF3B24',
        'Banging/Pounding': '#00A079',
        'Loud Talking': '#3D00A0',
        'Car/Truck Music': '#BB0096',
        
    }

    markers.forEach(marker => {
        map.removeLayer(marker);
    });
    markers = [];



    for (let i =0; i <data.length; i++) {
        const latitude = data[i].Latitude;
        const longitude = data[i].Longitude;
        const descriptor = data[i].Descriptor;
        const createdDate = data[i]['Created Date'];
        const color = colorMap[descriptor] || '#656565';

        const timeString = createdDate.split(' ')[1];
        const time = new Date('1970-01-01T' + timeString + 'Z');

        if (latitude !== null && longitude !== null && time.getHours() >= 9 && time.getHours() < 12)  {
           
        
          const circle = L.circle([latitude, longitude],{
            color: 'none',
            fillColor: color,
            fillOpacity: .75,
            radius: 70,
        }).addTo(map);

        circle.on('mouseover', function (event) {
            this.bindPopup(descriptor).openPopup();
        });
            circle.on('mouseout', function (event) {
                this.closePopup();
    });
    markers.push(circle);
    }
}
})

document.getElementById('twelvethreepm').addEventListener('click', function(){


    const colorMap = {
        'Loud Music/Party':'#FF3B24',
        'Banging/Pounding': '#00A079',
        'Loud Talking': '#3D00A0',
        'Car/Truck Music': '#BB0096',
        
    }

    markers.forEach(marker => {
        map.removeLayer(marker);
    });
    markers = [];
    for (let i =0; i <data.length; i++) {
        const latitude = data[i].Latitude;
        const longitude = data[i].Longitude;
        const descriptor = data[i].Descriptor;
        const createdDate = data[i]['Created Date'];
        const color = colorMap[descriptor] || '#656565';

        const timeString = createdDate.split(' ')[1];
        const time = new Date('1970-01-01T' + timeString + 'Z');

        if (latitude !== null && longitude !== null && time.getHours() >= 12 && time.getHours() < 15)  {
           
            
          const circle = L.circle([latitude, longitude],{
            color: 'none',
            fillColor: color,
            fillOpacity: .75,
            radius: 70,
        }).addTo(map);

        circle.on('mouseover', function (event) {
            this.bindPopup(descriptor).openPopup();
        });
            circle.on('mouseout', function (event) {
                this.closePopup();
    });
    markers.push(circle);
    }
}
})

document.getElementById('threesixpm').addEventListener('click', function(){


    const colorMap = {
        'Loud Music/Party':'#FF3B24',
        'Banging/Pounding': '#00A079',
        'Loud Talking': '#3D00A0',
        'Car/Truck Music': '#BB0096',
        
    }

    markers.forEach(marker => {
        map.removeLayer(marker);
    });
    markers = [];
    for (let i =0; i <data.length; i++) {
        const latitude = data[i].Latitude;
        const longitude = data[i].Longitude;
        const descriptor = data[i].Descriptor;
        const createdDate = data[i]['Created Date'];
        const color = colorMap[descriptor] || '#656565';

        const timeString = createdDate.split(' ')[1];
        const time = new Date('1970-01-01T' + timeString + 'Z');

        if (latitude !== null && longitude !== null && time.getHours() >= 15 && time.getHours() < 18) {
           
        
          const circle = L.circle([latitude, longitude],{
            color: 'none',
            fillColor: color,
            fillOpacity: .75,
            radius: 70,
        }).addTo(map);

        circle.on('mouseover', function (event) {
            this.bindPopup(descriptor).openPopup();
        });
            circle.on('mouseout', function (event) {
                this.closePopup();
    });
    markers.push(circle);
    }
}
})

document.getElementById('sixninepm').addEventListener('click', function(){


    const colorMap = {
        'Loud Music/Party':'#FF3B24',
        'Banging/Pounding': '#00A079',
        'Loud Talking': '#3D00A0',
        'Car/Truck Music': '#BB0096',
        
    }
    
    markers.forEach(marker => {
        map.removeLayer(marker);
    });
    markers = [];
    for (let i =0; i <data.length; i++) {
        const latitude = data[i].Latitude;
        const longitude = data[i].Longitude;
        const descriptor = data[i].Descriptor;
        const createdDate = data[i]['Created Date'];
        const color = colorMap[descriptor] || '#656565';

        const timeString = createdDate.split(' ')[1];
        const time = new Date('1970-01-01T' + timeString + 'Z');

        if (latitude !== null && longitude !== null && time.getHours() >= 18 && time.getHours() < 21) {
           
        
          const circle = L.circle([latitude, longitude],{
            color: 'none',
            fillColor: color,
            fillOpacity: .75,
            radius: 70,
        }).addTo(map);

        circle.on('mouseover', function (event) {
            this.bindPopup(descriptor).openPopup();
        });
            circle.on('mouseout', function (event) {
                this.closePopup();
    });
    markers.push(circle);
    }
}
})

document.getElementById('ninetwelveam').addEventListener('click', function(){


    const colorMap = {
        'Loud Music/Party':'#FF3B24',
        'Banging/Pounding': '#00A079',
        'Loud Talking': '#3D00A0',
        'Car/Truck Music': '#BB0096',
        
    }

    markers.forEach(marker => {
        map.removeLayer(marker);
    });
    markers = [];
    for (let i =0; i <data.length; i++) {
        const latitude = data[i].Latitude;
        const longitude = data[i].Longitude;
        const descriptor = data[i].Descriptor;
        const createdDate = data[i]['Created Date'];
        const color = colorMap[descriptor] || '#656565';

        const timeString = createdDate.split(' ')[1];
        const time = new Date('1970-01-01T' + timeString + 'Z');

        if (latitude !== null && longitude !== null && time.getHours() >= 21 && time.getHours() < 24) {
           
        
          const circle = L.circle([latitude, longitude],{
            color: 'none',
            fillColor: color,
            fillOpacity: .75,
            radius: 70,
        }).addTo(map);

        circle.on('mouseover', function (event) {
            this.bindPopup(descriptor).openPopup();
        });
            circle.on('mouseout', function (event) {
                this.closePopup();
    });
    markers.push(circle);
    }
}
})

document.getElementById('twelvethreeam').addEventListener('click', function(){


    const colorMap = {
        'Loud Music/Party':'#FF3B24',
        'Banging/Pounding': '#00A079',
        'Loud Talking': '#3D00A0',
        'Car/Truck Music': '#BB0096',
        
    }

    markers.forEach(marker => {
        map.removeLayer(marker);
    });
    markers = [];
    for (let i =0; i <data.length; i++) {
        const latitude = data[i].Latitude;
        const longitude = data[i].Longitude;
        const descriptor = data[i].Descriptor;
        const createdDate = data[i]['Created Date'];
        const color = colorMap[descriptor] || '#656565';

        const timeString = createdDate.split(' ')[1];
        const time = new Date('1970-01-01T' + timeString + 'Z');

        if (latitude !== null && longitude !== null && time.getHours() >= 0 && time.getHours() < 3) {
           
        
          const circle = L.circle([latitude, longitude],{
            color: 'none',
            fillColor: color,
            fillOpacity: .75,
            radius: 70,
        }).addTo(map);

        circle.on('mouseover', function (event) {
            this.bindPopup(descriptor).openPopup();
        });
            circle.on('mouseout', function (event) {
                this.closePopup();
    });
    markers.push(circle);
    }
}
})


document.getElementById('threesixam').addEventListener('click', function(){


    const colorMap = {
        'Loud Music/Party':'#FF3B24',
        'Banging/Pounding': '#00A079',
        'Loud Talking': '#3D00A0',
        'Car/Truck Music': '#BB0096',
        
    }

    markers.forEach(marker => {
        map.removeLayer(marker);
    });
    markers = [];
    for (let i =0; i <data.length; i++) {
        const latitude = data[i].Latitude;
        const longitude = data[i].Longitude;
        const descriptor = data[i].Descriptor;
        const createdDate = data[i]['Created Date'];
        const color = colorMap[descriptor] || '#656565';

        const timeString = createdDate.split(' ')[1];
        const time = new Date('1970-01-01T' + timeString + 'Z');

        if (latitude !== null && longitude !== null && time.getHours() >= 3 && time.getHours() < 6) {
           
        
          const circle = L.circle([latitude, longitude],{
            color: 'none',
            fillColor: color,
            fillOpacity: .75,
            radius: 70,
        }).addTo(map);

        circle.on('mouseover', function (event) {
            this.bindPopup(descriptor).openPopup();
        });
            circle.on('mouseout', function (event) {
                this.closePopup();
    });
    markers.push(circle);
    }
}
})



})

fetch('group-data.json')
.then(response => response.json())
.then(data => {


    document.getElementById('community').addEventListener('click', function(){

        const colorMap = {
            'Loud Music/Party':'#FF3B24',
            'Banging/Pounding': '#00A079',
            'Loud Talking': '#3D00A0',
            'Car/Truck Music': '#BB0096',

        }
       
    for (let i = 0; i < data.length; i++) {
        

        const latitude = data[i].Latitude;
        const longitude = data[i].Longitude;
        const descriptor = data[i].Descriptor;
        const color = colorMap[descriptor] || '#656565';

    
    const circle = L.circle([latitude, longitude],{
        color: 'yellow',
            fillColor: color,
            fillOpacity: .5,
            radius: 200,
    }).addTo(map);
    circle.on('mouseover', function (event) {
        this.bindPopup(descriptor).openPopup();
    });
        circle.on('mouseout', function (event) {
            this.closePopup();
});

    }
})
})

.catch(error => console.error('error fetching',  error));