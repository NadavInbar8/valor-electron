import { Link, Outlet, useParams } from 'react-router-dom';
import './Champion.scss';
import { riotAPIService } from 'renderer/services/riotapi.service';
import { Champion } from '../../services/lol_interfaces';
import React, { useEffect, useState } from 'react';
import Loader from 'renderer/components/Loader/Loader';

export interface iChampionProps {}

const Champion: React.FC<iChampionProps> = () => {
  const { championName } = useParams();
  const [champion, setChampion] = useState<Champion>();
  const [squareImg, setSquareImg] = useState<string>('');
  const [backgroundImg, setBackgroundImg] = useState<string>('');

  useEffect(() => {
    if (championName) {
      riotAPIService.getChampion(championName).then((res) => {
        console.log('res', res);
        // temp = { ...res };
        console.log(res);
        setChampion(res);
      });
      // setSquareImg(
      //   `http://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/${championName}.png`
      // );
      setBackgroundImg(
        `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championName}_0.jpg`
      );
    }
  }, [championName]);

  return champion ? (
    <>
      <img src={champion.backgroundImage} alt="bg" className="bg-image" />
      <div className="champion">
        <div className="bg-overlay"></div>
        <div className="champion-header">
          <div className="img-container">
            <img
              src={champion.squareImage}
              alt="square img"
              className="squareImg"
            />
          </div>
          <div className="champion-info">
            <div className="champion-label">
              <span className="champion-name">{champion.id}</span>
              <span className="champion-title">{champion.title}</span>
            </div>
            <div className="champion-header-row">{champion.blurb}</div>
          </div>
        </div>
        <div className="champion-nav">
          <Link
            to={`/champion/${championName}/overview`}
            className="champion-tab"
          >
            Overview
          </Link>
          <Link
            to={`/champion/${championName}/builds`}
            className="champion-tab"
          >
            Build
          </Link>
          <Link to={`/champion/${championName}/runes`} className="champion-tab">
            Runes
          </Link>
          <Link to={`/champion/${championName}/items`} className="champion-tab">
            Items
          </Link>
          <Link
            to={`/champion/${championName}/counters`}
            className="champion-tab"
          >
            Counters
          </Link>
          <Link to={`/champion/${championName}/duos`} className="champion-tab">
            Duos
          </Link>
        </div>
        <div className="champion-content">
          <Outlet />
        </div>
      </div>
    </>
  ) : (
    <>
      <Loader />
    </>
  );
};
export default Champion;
