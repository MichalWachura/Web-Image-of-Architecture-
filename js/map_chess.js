"use strict"

const coordsChess = [52.50660887913627, 13.354086623974753]

const map = L.map('map').setView(coordsChess, 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);




const iconOptions = {
    iconUrl: './markers/chess_marker.png',
    iconSize:     [60, 120], // size of the icon
};


const chessIcon = L.icon(iconOptions);

const markerOptions = {
    icon:chessIcon
}

const marker = L.marker(coordsChess,markerOptions).addTo(map)