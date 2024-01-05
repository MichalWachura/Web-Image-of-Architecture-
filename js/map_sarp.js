"use strict"

const coordsSARP = [50.25888118787596, 18.980131979703874]

const map = L.map('map').setView(coordsSARP, 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);




const iconOptions = {
    iconUrl: './markers/sarp_marker.png',
    iconSize:     [60, 120], // size of the icon
};


const sarpIcon = L.icon(iconOptions);

const markerOptions = {
    icon:sarpIcon
}

const marker = L.marker(coordsSARP,markerOptions).addTo(map)