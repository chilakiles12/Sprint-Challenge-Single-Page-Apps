import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationCard from './LocationCard';

export default function LocationList() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/location/')
      .then(response => {
        setLocations(response.data.results);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <section>
      {locations.map(location => {
        return <LocationCard location={location} key={location.id} />;
      })}
    </section>
  );
}
