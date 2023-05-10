import './Dashboard.scss';
import logo from '../../../assets/logo.svg';
import searchIcon from '../../../assets/search.svg';
import { useState } from 'react';
import { riotAPIService } from 'renderer/services/riotapi.service';
import Champion from '../Champion/Champion';
import { Navigate, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [search, setSearch] = useState<string>('');
  const navigate = useNavigate();

  const handleSearch = async () => {
    navigate(`/champion/${search.charAt(0).toUpperCase() + search.slice(1)}`);
  };

  return (
    <div className="dashboard">
      <div className="top-section">
        <img src={logo} alt="logo" className="logo" />
        <h1>Valor</h1>
      </div>
      <div className="bot-section">
        <input
          type="text"
          className="dashboard-search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="button" className="region-picker">
          NA
        </button>
        <img
          src={searchIcon}
          alt="search"
          className="search-btn"
          onClick={handleSearch}
        />
      </div>
    </div>
  );
};

export default Dashboard;
