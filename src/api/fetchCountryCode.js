const fetchCountryCode = (t, map, coord) => {
  const API_KEY = process.env.REACT_APP_LOCATION_API;
  const { latLng } = coord;
  const lat = latLng.lat();
  const lng = latLng.lng();
  return fetch(`https://us1.locationiq.com/v1/reverse.php?key=${API_KEY}&lat=${lat}&lon=${lng}&format=json`).then((response) => response.json());
};

export default fetchCountryCode;