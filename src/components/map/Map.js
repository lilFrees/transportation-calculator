import { useState, useEffect, useMemo } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import axios from "axios";

const coordFetchHandler = async function (zipCode) {
  try {
    const response = await axios.get(`https://api.zippopotam.us/us/${zipCode}`);
    const latitude = response.data.places[0].latitude;
    const longitude = response.data.places[0].longitude;
    return { latitude, longitude };
  } catch (error) {
    console.error("Error fetching coordinates:", error);
    return null;
  }
};

const Map = function () {
  const [coordinates, setCoordinates] = useState({
    place1: null,
    place2: null,
  });

  useEffect(() => {
    const fetchCoordsAndZipcodes = async function () {
      const place1Zip = JSON.parse(localStorage.getItem("place1"));
      const place2Zip = JSON.parse(localStorage.getItem("place2"));

      if (place1Zip) {
        const coords = await coordFetchHandler(place1Zip.zip);
        setCoordinates((prev) => ({ ...prev, place1: coords }));
      }
      if (place2Zip) {
        const coords = await coordFetchHandler(place2Zip.zip);
        setCoordinates((prev) => ({ ...prev, place2: coords }));
      }
    };

    fetchCoordsAndZipcodes();

    // Add event listener for changes in localStorage
    window.addEventListener("customStorageChange", fetchCoordsAndZipcodes);

    // Cleanup function
    return () => {
      window.removeEventListener("customStorageChange", fetchCoordsAndZipcodes);
    };
  }, []);

  const customIcon = new Icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconSize: [25, 38],
  });

  return (
    <MapContainer
      center={[39.5, -98.35]}
      zoom={5}
      scrollWheelZoom={true}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {coordinates.place1 && (
        <Marker
          position={[coordinates.place1.latitude, coordinates.place1.longitude]}
          icon={customIcon}
        >
          <Popup>
            <h4>123</h4>
          </Popup>
        </Marker>
      )}
      {coordinates.place2 && (
        <Marker
          position={[coordinates.place2.latitude, coordinates.place2.longitude]}
          icon={customIcon}
        >
          <Popup>
            <h4>123</h4>
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default Map;
