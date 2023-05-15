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

export default function App() {
  const [championsList, setChampionsList] = useState<Champion[]>([]);

  const updateChampionsList = (list: Champion[]) => {
    setChampionsList(list);
  };

  useEffect(() => {
    riotAPIService.getChampions().then((res) => {
      updateChampionsList(res);
    });
  }, []);

  return (
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
              <Route path="/champion/:championName/items" element={<Items />} />
              <Route path="/champion/:championName/runes" element={<Runes />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </ChampionsContext.Provider>
  );
}
