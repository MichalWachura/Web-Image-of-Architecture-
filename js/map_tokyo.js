"use strict"

const coordsTokyo = [35.58438444952813, 139.66780335920754]

const map = L.map('map').setView(coordsTokyo, 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);




const iconOptions = {
    iconUrl: './markers/tokyo_marker.png',
    iconSize:     [60, 120], // size of the icon
};


const sarpIcon = L.icon(iconOptions);

const markerOptions = {
    icon:sarpIcon
}

const marker = L.marker(coordsTokyo,markerOptions).addTo(map)