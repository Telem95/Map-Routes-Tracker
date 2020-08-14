// Temporary File
// Fakes user location change

import * as Location from "expo-location";

const tenMetersWithDegrees = 0.0001;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const getLocation = () => {
  return {
    timestamp: 1000000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      latitude: 32.062586 + getRandomInt(-25, 25) * tenMetersWithDegrees,
      longitude: 34.829518 + getRandomInt(-25, 25) * tenMetersWithDegrees,
    },
  };
};

setInterval(() => {
  Location.EventEmitter.emit("Expo.locationChanged", {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(),
  });
}, 1000);
