import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import axios from "axios";
import style from "./Map.module.css";

const coordFetchZipHandler = async function (zipCode) {
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

const coordFetchCityHandler = async function (city, state) {
  const cityVal = city.toLowerCase();
  try {
    const response = await axios.get(
      `https://api.api-ninjas.com/v1/geocoding?city=${cityVal}&state=${state}&country=US`,
      {
        headers: { "X-Api-Key": "6e2dXDpxEkF86J1lH7j8cA==jmbt7WPeGVoBvXRI" },
        contentType: "application/json",
      }
    );
    const longitude = response.data[0].longitude;
    const latitude = response.data[0].latitude;
    return { latitude, longitude };
  } catch (error) {
    console.error("Error fetching city coordinates", error);
    return null;
  }
};

const Map = function () {
  const [coordinates, setCoordinates] = useState({
    place1: null,
    place2: null,
  });

  const [city1, setCity1] = useState("");
  const [city2, setCity2] = useState("");

  useEffect(() => {
    const fetchCoordsAndZipcodes = async function () {
      const place1Zip = JSON.parse(localStorage.getItem("place1"));
      const place2Zip = JSON.parse(localStorage.getItem("place2"));

      if (place1Zip) {
        const coords = place1Zip.zip
          ? await coordFetchZipHandler(place1Zip.zip)
          : await coordFetchCityHandler(place1Zip.city, place1Zip.state);
        setCoordinates((prev) => ({ ...prev, place1: coords }));
        setCity1(`${place1Zip.city}, ${place1Zip.state}`);
      }
      if (place2Zip) {
        const coords = place2Zip.zip
          ? await coordFetchZipHandler(place2Zip.zip)
          : await coordFetchCityHandler(place2Zip.city, place2Zip.state);
        setCoordinates((prev) => ({ ...prev, place2: coords }));
        setCity2(`${place2Zip.city}, ${place2Zip.state}`);
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
    <div className={style.map}>
      <MapContainer
        center={[39.5, -98.35]}
        zoom={4}
        scrollWheelZoom={true}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {coordinates.place1 && (
          <Marker
            position={[
              coordinates.place1.latitude,
              coordinates.place1.longitude,
            ]}
            icon={customIcon}
          >
            <Popup>
              <h4>{city1}</h4>
            </Popup>
          </Marker>
        )}
        {coordinates.place2 && (
          <Marker
            position={[
              coordinates.place2.latitude,
              coordinates.place2.longitude,
            ]}
            icon={customIcon}
          >
            <Popup>
              <h4>{city2}</h4>
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default Map;
