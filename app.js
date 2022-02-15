"use strict";

// require('dotenv').config();

//192.212.174.101

const ipAddressField = document.querySelector(".ipAddressField");
const timezoneInput = document.querySelector(".timezoneInput");
const countryLocationInput = document.querySelector(".locationInput");
const ispInput = document.querySelector(".ispInput");
const submitBtn = document.querySelector(".submit-btn");
const inputField = document.querySelector(".input-field");

//Secret API
import MY_API_TOKEN from './config.js';
let key =  MY_API_TOKEN;
let url =
  "https://geo.ipify.org/api/v2/country,city?apiKey=" + key + "&ipAddress=";

//Map

let map = L.map("map").setView([51.505, -0.09], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

//API
let ipAddress;
const apiFunc = function init() {
  //API url
  $.getJSON(url, function (data) {
    //Retrieving key values
    ipAddress = data.ip;
    let timeZone = data.location.timezone;
    let countryLocation = data.location.country;
    let cityLocation = data.location.city;
    let postalCode = data.location.postalCode;
    let isp = data.isp;
    let lat = data.location.lat;
    let lng = data.location.lng;

    //Adding values to HTML
    ipAddressField.innerHTML = ipAddress;
    timezoneInput.innerHTML = ` UTC ${timeZone}`;
    countryLocationInput.innerHTML = `${countryLocation}, ${cityLocation} ${postalCode}`;
    ispInput.innerHTML = isp;
    //

    //
    //Display on Map
    const mapLocation = () => {
      var markerIcon = L.icon({
        iconUrl: "images/icon-location.svg",

        iconSize: [46, 56], // size of the icon
        iconAnchor: [23, 55], // point of the icon which will correspond to marker's location
      });
      map.setView([lat, lng], 17);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: false,
      }).addTo(map);

      L.marker([lat, lng], { icon: markerIcon }).addTo(map);
    };
    mapLocation();

    //
    //Search by IP
    submitBtn.addEventListener("click", (event) => {
      event.preventDefault();
      ipAddress = inputField.value;
      url =
        "https://geo.ipify.org/api/v2/country,city?apiKey=" +
        key +
        "&ipAddress=" +
        ipAddress;
      apiFunc();
    });

    //
  });
};

apiFunc();
