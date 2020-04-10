export const getGeoLocation = (success, error) => {
  if (navigator.geolocation) {
    return navigator.geolocation.getCurrentPosition(success, error);
  } else {
    // status.textContent = 'Geolocation is not supported by your browser';
  }
};
