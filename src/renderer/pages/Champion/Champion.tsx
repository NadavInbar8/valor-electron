import { Link, Outlet, useOutletContext, useParams } from 'react-router-dom';
import './Champion.scss';
import { riotAPIService } from 'renderer/services/riotapi.service';
import { Champion } from '../../services/lol_interfaces';
import React, { createContext, useContext, useEffect, useState } from 'react';
import Loader from 'renderer/components/Loader/Loader';
import navBorder from '../../../assets/Layer 1.svg';
import { ThemeContext } from 'renderer/App';
import { iChampionContext } from 'renderer/services/context_interfaces';

export interface iChampionProps {}

export const ChampionContext = createContext<iChampionContext>(null as any);

const Champion: React.FC<iChampionProps> = () => {
  const { championName } = useParams();
  const { theme, updateTheme } = useContext(ThemeContext);
  const [champion, setChampion] = useState<Champion>();
  const [squareImg, setSquareImg] = useState<string>('');
  const [backgroundImg, setBackgroundImg] = useState<string>('');

  useEffect(() => {
    if (championName) {
      riotAPIService.getChampion(championName).then((res) => {
        console.log('res', res);
        // temp = { ...res };
        updateTheme(res.region);
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

  const updateChampion = (ch: Champion) => {
    setChampion(ch);
  };

  return champion ? (
    <>
      <div className="champion" style={{ backgroundColor: theme.background }}>
        <div className="champion-header">
          <img
            style={{
              // opacity: 0.6,
              // maskImage: ` -webkit-gradient(linear,left top,left bottom,from(rgba(0, 0, 0, 0.1)),to(${theme.background}))`,
              WebkitMask: ` -webkit-gradient((${theme.background}) 50% ,transparent 100%)`,
              // WebkitMask: ` linear-gradient(${theme.background} 50%, transparent 100%)`,
            }}
            src={champion.backgroundImage}
            alt="bg"
            className="bg-image"
          />
          {/* <div className="bg-overlay"></div> */}
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
          <div className="nav-item">
            <Link
              to={`/champion/${championName}/builds`}
              className="champion-tab"
            >
              Build
            </Link>
          </div>
          <div className="nav-item">
            <Link
              to={`/champion/${championName}/overview`}
              className="champion-tab"
            >
              Overview
            </Link>
          </div>
          <div className="nav-item">
            <Link
              to={`/champion/${championName}/runes`}
              className="champion-tab"
            >
              Runes
            </Link>
          </div>
          <div className="nav-item">
            <Link
              to={`/champion/${championName}/items`}
              className="champion-tab"
            >
              Items
            </Link>
          </div>
          <div className="nav-item">
            <Link
              to={`/champion/${championName}/counters`}
              className="champion-tab"
            >
              Counters
            </Link>
          </div>
          <div className="nav-item">
            <Link
              to={`/champion/${championName}/duos`}
              className="champion-tab"
            >
              Duos
            </Link>
          </div>
        </div>
        <div className="champion-content">
          <ChampionContext.Provider value={{ champion, updateChampion }}>
            <Outlet />
          </ChampionContext.Provider>
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
