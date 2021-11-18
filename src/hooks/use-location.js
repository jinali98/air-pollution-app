import { useState } from "react";

const useLocation = () => {
  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const [isAllow, setIsAllow] = useState(true);

  if (navigator.geolocation) {
    navigator.geolocation.watchPosition((position) => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      setLat(lat);
      setLong(long);
    });
  } else {
    setIsAllow(false);
    console.log("permission error");
  }

  return {
    lat,
    long,
    isAllow,
  };
};

export default useLocation;
