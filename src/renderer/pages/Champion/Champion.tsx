import { useParams } from 'react-router-dom';
import './Champion.scss';
import { riotAPIService } from 'renderer/services/riotapi.service';
import { Champion } from '../../services/lol_interfaces';
import React, { useEffect, useState } from 'react';

export interface iChampionProps {}

const Champion: React.FC<iChampionProps> = () => {
  const { championName } = useParams();
  const [champion, setChampion] = useState();

  useEffect(() => {
    if (championName) {
      riotAPIService.getChampion(championName).then((res) => setChampion(res));
    }
  }, []);

  return (
    <div className="champion">
      <h1>{championName}!</h1>
    </div>
  );
};
export default Champion;
