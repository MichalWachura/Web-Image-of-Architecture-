"use strict"

const coordsCBM = [50.28825454823797, 18.678698954019374]

const map = L.map('map').setView(coordsCBM, 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);




const iconOptions = {
    iconUrl: './markers/cbm_marker.png',
    iconSize:  [60, 120], // size of the icon
};


const cbmIcon = L.icon(iconOptions);

const markerOptions = {
    icon:cbmIcon
}

const marker = L.marker(coordsCBM,markerOptions).addTo(map)