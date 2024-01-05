
"use strict"

const coords = [47.358586569499906, 8.51624391347801]

const map = L.map('map').setView(coords, 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);




const iconOptions = {
    iconUrl: './markers/mw_marker.png',
    iconSize:     [25, 55], // size of the icon
};


const michalIcon = L.icon(iconOptions);

const markerOptions = {
    icon:michalIcon
}

const marker = L.marker(coords,markerOptions).addTo(map)






// Laubegg 1 coord
//https://www.google.com/maps/place/Im+Laubegg+1,+8045+Z%C3%BCrich,+Szwajcaria/@47.3585684,8.5162761,17z/data=!3m1!4b1!4m6!3m5!1s0x479009ed7ddd4551:0xd41812f28630875!8m2!3d47.3585684!4d8.5162761!16s%2Fg%2F11c2hm69_5?entry=ttu

