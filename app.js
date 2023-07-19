'use strict'
import API_KEY from './config.js'

const ipAddressField = document.querySelector('.ipAddressField')
const timezoneInput = document.querySelector('.timezoneInput')
const countryLocationInput = document.querySelector('.locationInput')
const ispInput = document.querySelector('.ispInput')
const submitBtn = document.querySelector('.submit-btn')
const inputField = document.querySelector('.input-field')

//Map

let map = L.map('map').setView([51.505, -0.09], 13)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map)

//API
let ipAddress
let randomIP = ''
let timeZone
let countryLocation
let cityLocation
let postalCode
let isp
let lat
let lng

let url = `https://api.ipgeolocation.io/ipgeo?apiKey=${API_KEY}=`
fetch(url)
  .then((response) => response.json())
  .then((response) => {
    ipAddress = response.ip
    timeZone = response.time_zone.offset
    countryLocation = response.country_name
    cityLocation = response.city
    postalCode = response.zipcode
    isp = response.isp
    lat = response.latitude
    lng = response.longitude

    ipAddressField.innerHTML = ipAddress
    timezoneInput.innerHTML = ` UTC ${timeZone}`
    countryLocationInput.innerHTML = `${countryLocation}, ${cityLocation} ${postalCode}`
    ispInput.innerHTML = isp
    mapLocation(lat, lng)
  }).catch(error => console.log(error))

const mapLocation = (lat, lng) => {
  var markerIcon = L.icon({
    iconUrl: 'images/icon-location.svg',

    iconSize: [46, 56], // size of the icon
    iconAnchor: [23, 55], // point of the icon which will correspond to marker's location
  })
  map.setView([lat, lng], 17)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: false,
  }).addTo(map)

  L.marker([lat, lng], { icon: markerIcon }).addTo(map)
}

//Search by IP + validation
submitBtn.addEventListener('click', (event) => {
  event.preventDefault()
  if (
    inputField.value.match(
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
    )
  ) {
    randomIP = inputField.value
    url = `https://api.ipgeolocation.io/ipgeo?apiKey=${API_KEY}=` + randomIP
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        ipAddress = response.ip
        timeZone = response.time_zone.offset
        countryLocation = response.country_name
        cityLocation = response.city
        postalCode = response.zipcode
        isp = response.isp
        lat = response.latitude
        lng = response.longitude

        ipAddressField.innerHTML = ipAddress
        timezoneInput.innerHTML = ` UTC ${timeZone}`
        countryLocationInput.innerHTML = `${countryLocation}, ${cityLocation} ${postalCode}`
        ispInput.innerHTML = isp
        mapLocation(lat, lng)
      }).catch(error => console.log(error))
  } else {
    alert('You have entered an invalid IP address!')
    return false
  }
})
