import L from "leaflet";
import "leaflet-routing-machine";

class OpenRouteServiceRouter {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  route(waypoints, callback, context, options) {
    const orsUrl = "https://api.openrouteservice.org/v2/directions/driving-car";
    const coords = waypoints
      .map((wp) => [wp.latLng.lng, wp.latLng.lat])
      .join("|");

    const requestUrl = `${orsUrl}?api_key=${this.apiKey}&coordinates=${coords}`;

    fetch(requestUrl)
      .then((response) => response.json())
      .then((data) => {
        const route = data.features[0];
        const result = {
          waypoints: waypoints,
          coordinates: route.geometry.coordinates.map((c) =>
            L.latLng(c[1], c[0])
          ),
          instructions: [],
          summary: {
            totalDistance: route.properties.segments[0].distance,
            totalTime: route.properties.segments[0].duration,
          },
        };
        callback(null, [result]);
      })
      .catch((error) => {
        callback(error);
      });
  }
}

export default OpenRouteServiceRouter;
