import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard';

export default function EpisodesList() {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/episode/')
      .then(response => {
        setEpisodes(response.data.results);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <section className="character-list grid-view">
      {episodes.map(episode => {
        return <EpisodeCard episode={episode} key={episode.id} />;
      })}
    </section>
  );
}
