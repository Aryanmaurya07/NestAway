// Leaflet map — no API key required
const coords = listing.geometry.coordinates; // [lng, lat]

const map = L.map("map").setView([coords[1], coords[0]], 9);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  maxZoom: 19,
}).addTo(map);

const redIcon = L.icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.marker([coords[1], coords[0]], { icon: redIcon })
  .addTo(map)
  .bindPopup(
    `<div class="map-click">
      <h4><b>${listing.title}</b></h4>
      <p>Exact location will be provided after booking.</p>
    </div>`
  )
  .openPopup();