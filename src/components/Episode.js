import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { Link, Route } from 'react-router-dom';

const Episodes = props => {
  const [episodes, setEpisodes] = useState();

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/episode')
      .then(response => {
        console.log(response.data.results);
        setEpisodes(response.data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return <div>props: </div>;
};

export default Episodes;
