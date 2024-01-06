"use strict"

const coordsPoint = [49.25885273288846, 19.815566596726025]

const map = L.map('map').setView(coordsPoint, 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);




const iconOptions = {
    iconUrl: './markers/point_marker.png',
    iconSize:     [60, 120], // size of the icon
};


const pointIcon = L.icon(iconOptions);

const markerOptions = {
    icon:pointIcon
}

const marker = L.marker(coordsPoint,markerOptions).addTo(map)