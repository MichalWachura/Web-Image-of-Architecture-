"use strict"

const coordsVeloraum = [50.2913738999769, 18.783940282877722]

const map = L.map('map').setView(coordsVeloraum, 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);




const iconOptions = {
    iconUrl: './markers/veloraum_marker.png',
    iconSize:     [60, 120], // size of the icon
};


const veloraumIcon = L.icon(iconOptions);

const markerOptions = {
    icon:veloraumIcon
}

const marker = L.marker(coordsVeloraum,markerOptions).addTo(map)