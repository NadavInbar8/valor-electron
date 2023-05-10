import { useParams } from 'react-router-dom';
import './Header.scss';
// import logo from '../../../assets/logo.svg';

const Header = () => {
  const params = useParams();

  return (
    <div className="header header-container">
      {/* <div className="header-logo">
        <img src={logo} alt="valor" className="logo" />
        <h1>Valor</h1>
      </div> */}
      <div className="header-search">
        {params.championName ? (
          <div className="header-search">
            <input type="text" name="" id="" />
          </div>
        ) : null}
      </div>
      <div className="header-inputs">set</div>
    </div>
  );
};

export default Header;
