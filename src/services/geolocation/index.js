export const getGeoLocation = () => {
  const success = (position) => ({ latitude: position.coords.latitude, longitude: position.coords.longitude });

  const error = () => 'Unable to retrieve your location';

  if (navigator.geolocation) {
    return navigator.geolocation.getCurrentPosition(success, error);
  } else {
    // status.textContent = 'Geolocation is not supported by your browser';
  }
};
