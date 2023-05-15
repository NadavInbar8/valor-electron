import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Sidebar.scss';
import logo from '../../../assets/logo.svg';

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <div
      className="sidebar"
      onMouseEnter={() => setExtended(true)}
      onMouseLeave={() => setExtended(false)}
    >
      <div role="button" tabIndex={0} className="sidebar-top" onClick={goHome}>
        <img src={logo} alt="logo" className="logo" />
        {extended && <h4>Valor</h4>}
      </div>
      <ul>
        <li className="tab" onClick={() => navigate('/champion/Aatrox/builds')}>
          {extended ? 'Tier List' : 'TL'}
        </li>
        <li className="tab">{extended ? 'Champions' : 'CP'}</li>
        <li className="tab">{extended ? 'Items' : 'IM'}</li>
      </ul>
    </div>
  );
};

export default Sidebar;
