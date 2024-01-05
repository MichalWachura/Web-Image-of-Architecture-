"use strict"

const coordsMarina = [50.33557151275338, 18.625311463255187]

const map = L.map('map').setView(coordsMarina, 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);




const iconOptions = {
    iconUrl: './markers/marina_marker.png',
    iconSize:     [60, 120], // size of the icon
};


const marinaIcon = L.icon(iconOptions);

const markerOptions = {
    icon:marinaIcon
}

const marker = L.marker(coordsMarina,markerOptions).addTo(map)

//marina
//www.google.com/maps/place/50%C2%B020'05.7%22N+18%C2%B037'29.4%22E/@50.3349204,18.6222661,17z/data=!3m1!4b1!4m4!3m3!8m2!3d50.334917!4d18.624841?authuser=0&entry=ttu

//https://www.google.com/maps/place/50%C2%B020'08.3%22N+18%C2%B037'29.0%22E/@50.3356394,18.6221371,17z/data=!3m1!4b1!4m4!3m3!8m2!3d50.335636!4d18.624712?authuser=0&entry=ttu