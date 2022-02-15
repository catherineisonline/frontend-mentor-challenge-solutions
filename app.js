"use strict";

//192.212.174.101 - Test IP

const ipAddressField = document.querySelector(".ipAddressField");
const timezoneInput = document.querySelector(".timezoneInput");
const countryLocationInput = document.querySelector(".locationInput");
const ispInput = document.querySelector(".ispInput");
const submitBtn = document.querySelector(".submit-btn");
const inputField = document.querySelector(".input-field");

//Secret API key
import MY_API_TOKEN from "./config.js";
let key = MY_API_TOKEN;

//Map

let map = L.map("map").setView([51.505, -0.09], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

//API
let ipAddress;
let randomIP;
let url = "https://api.freegeoip.app/json/?apikey=" + key;

const apiFunc = function init() {
  $.getJSON(url, function (response) {
    // console.log(ip);
    // Retrieving key values
    ipAddress = response.ip;
    let timeZone = response.time_zone;
    let countryLocation = response.country_name;
    let cityLocation = response.city;
    let postalCode = response.zip_code;
    let isp = "Unavailable";
    let lat = response.latitude;
    let lng = response.longitude;

    // Adding values to HTML
    ipAddressField.innerHTML = ipAddress;
    timezoneInput.innerHTML = ` UTC ${timeZone}`;
    countryLocationInput.innerHTML = `${countryLocation}, ${cityLocation} ${postalCode}`;
    ispInput.innerHTML = isp;

    // Display on Map
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
    //Search by IP + validation
    submitBtn.addEventListener("click", (event) => {
      event.preventDefault();
      if (
        inputField.value.match(
          /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
        )
      ) {
        randomIP = inputField.value;
        url = "https://api.freegeoip.app/json/" + randomIP + "?apikey=" + key;
        return apiFunc();
      } else {
        return alert("You have entered an invalid IP address!");
      }
    });
  });
};

apiFunc();
