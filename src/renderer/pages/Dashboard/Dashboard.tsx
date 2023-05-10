import './Dashboard.scss';
import logo from '../../../assets/logo.svg';
import searchIcon from '../../../assets/search.svg';

const Dashboard = () => {
  const search = () => {
    console.log('clicked');
  };

  return (
    <div className="dashboard">
      <div className="top-section">
        <img src={logo} alt="logo" className="logo" />
        <h1>Valor</h1>
      </div>
      <div className="bot-section">
        <input type="text" className="dashboard-search" />
        <button type="button" className="region-picker">
          NA
        </button>
        <img
          src={searchIcon}
          alt="search"
          className="search-btn"
          onClick={search}
        />
      </div>
    </div>
  );
};

export default Dashboard;
