import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
// import icon from '../../assets/icon.svg';
import './App.scss';
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard/Dashboard';
import Champion from './pages/Champion/Champion';
import Overview from './pages/Champion/Overview/Overview';
import Builds from './pages/Champion/Builds/Builds';
import Counters from './pages/Champion/Counters/Counters';
import Duos from './pages/Champion/Duos/Duos';
import Items from './pages/Champion/Items/Items';
import Runes from './pages/Champion/Runes/Runes';
import { createContext, useEffect, useState } from 'react';
import { ChampionsListContext } from './services/context_interfaces';
import { riotAPIService } from './services/riotapi.service';

export const ChampionsContext = createContext<ChampionsListContext>(
  null as any
);

// //background
// $cp1-d: #131920;
// $cp1: #1f2833;
// $cp1-l: #2b3642;
// $cp1-t-d: #2e3a49bb;
// $cp1-t: #1f2833bb;
// $cp1-t-l: #131920bb;
//panels
// $cp2-d: #1a2738;
// $cp2: #26374d;
// $cp2-l: #4f6888;

// $cp2-t-l: #374b6880;
// $cp2-t: #27384f80;
// $cp2-t-d: #19263880;

// //text
// $cp3-d: #bbbbbb;
// $cp3: #eeeeee;
// $cp3-l: #ffffff;
// $cp1-d: #090b0f;
// $cp1: #0b0c10;
// $cp1-l: #111218;
// --fz-cp4-d: #4ad3ca;
// --fzcp4: #57ece2;
// --fzcp4-l: #8bfff7;

// // links, sub-border
// --fzcp5-d: #38918c;
// --fzcp5: #45a29e;
// --fzcp5-l: #5bb4b0;

// //main, titles, main-border
// --pz-cp4-l: #ffd270;
// --pz-cp4: #ffbc2c;
// --pz-cp4-d: #db9e1b;

// // links, sub-border
// --pz-cp5-l: #c29941;
// --pz-cp5: #c28c17;
// --pz-cp5-d: #9e700e;

export const themes: any = {
  Default: {
    background: '#27384f',
    border: '#27384f',
    border_l: '#27384f',
  },
  Demacia: {
    border: 'rgb(206, 187, 166)',
    border_l: 'rgb(247, 235, 221)',
    background: 'rgb(60, 72, 89)',
  },
  Noxus: {
    border: 'rgb(236, 85, 110)',
    border_l: ' rgb(182, 55, 74)',
    background: 'rgb(57, 56, 78)',
  },
  Freljord: {
    border: 'rgb(69, 161, 156)',
    border_l: ' rgb(85, 236, 226)',
    background: ' rgb(43, 69, 89)',
  },
  Ionia: {
    border: 'rgb(236, 85, 161)',
    border_l: ' rgb(180, 75, 128)',
    background: '  rgb(57, 58, 85)',
  },
  ShadowIsles: {
    border: 'rgb(74, 196, 160)',
    border_l: ' rgb(85, 236, 203)',
    background: 'rgb(43, 73, 89)',
  },
  Zaun: {
    border: 'rgba(79,90,58,255)',
    border_l: ' #65824c',
    background: 'rgba(40,40,32,255)',
  },
  Piltover: {
    border: 'rgb(196, 141, 23)',
    border_l: ' rgb(255, 189, 46)',
    background: 'rgb(59, 67, 72)',
  },
  BandleCity: {
    border: ' #90c738',
    border_l: ' #aafc27',
    background: '#334a4b',
  },
  Bilgewater: {
    border: 'rgb(184, 91, 63)',
    border_l: ' rgb(241, 137, 105)',
    background: 'rgb(57, 60, 77)',
  },
  Targon: {
    border: 'rgb(134, 89, 192)',
    border_l: ' rgb(166, 126, 219)',
    background: 'rgb(50, 60, 93)',
  },
  Shurima: {
    border: 'rgb(177, 155, 31)',
    border_l: ' #f3d00c',
    background: 'rgb(59, 67, 72)',
  },
};

export const ThemeContext = createContext(themes.Default);

export default function App() {
  const [championsList, setChampionsList] = useState<{[key:string]:Champion}>({});
  const [theme, setTheme] = useState<{
    border: string;
    border_l: string;
    background: string;
  }>(themes.Default);

  const updateChampionsList = (list: {[key:string]:Champion}) => {
    setChampionsList(list);
  };

  const updateTheme = (region: string) => {
    setTheme(themes[region]);
  };

  useEffect(() => {
    riotAPIService.getChampions().then((res) => {
      updateChampionsList(res);
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      <ChampionsContext.Provider value={{ championsList, updateChampionsList }}>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="/champion/:championName" element={<Champion />}>
                <Route
                  path="/champion/:championName/overview"
                  element={<Overview />}
                />
                <Route
                  path="/champion/:championName/builds"
                  element={<Builds />}
                />
                <Route
                  path="/champion/:championName/counters"
                  element={<Counters />}
                />
                <Route path="/champion/:championName/duos" element={<Duos />} />
                <Route
                  path="/champion/:championName/items"
                  element={<Items />}
                />
                <Route
                  path="/champion/:championName/runes"
                  element={<Runes />}
                />
              </Route>
            </Route>
          </Routes>
        </Router>
      </ChampionsContext.Provider>
    </ThemeContext.Provider>
  );
}
