import makeAnimated from 'react-select/animated';
import Select from 'react-select';
import './Builds.scss';
import filterSvg from 'assets/filter.svg';
import topSvg from 'assets/top.svg';
import jungleSvg from 'assets/jungle.svg';
import midSvg from 'assets/mid.svg';
import botSvg from 'assets/bot.svg';
import supSvg from 'assets/support.svg';
import challengerSvg from 'assets/challenger.svg';
import grandMasterSvg from 'assets/grandmaster.svg';
import masterSvg from 'assets/master.svg';
import diamondSvg from 'assets/diamond.svg';
import platSvg from 'assets/platinum.svg';
import goldSvg from 'assets/gold.svg';
import silverSvg from 'assets/silver.svg';
import bronzeSvg from 'assets/bronze.svg';
import ironSvg from 'assets/iron.svg';

const animatedComponents = makeAnimated();

const Builds: React.FC = () => {
  const options = [
    {
      value: 'challenger',
      label: (
        <>
          <img src={challengerSvg} alt="challenger" />
          <span>Challenger</span>
        </>
      ),
    },
    {
      value: 'grandmaster',
      label: (
        <>
          <img src={grandMasterSvg} alt="GM" />
          <span>Grandmaster</span>
        </>
      ),
    },
    {
      value: 'master',
      label: (
        <>
          <img src={masterSvg} alt="GM" />
          <span>Master</span>
        </>
      ),
    },
    {
      value: 'diamond',
      label: (
        <>
          <img src={diamondSvg} alt="GM" />
          <span>Diamond</span>
        </>
      ),
    },
    {
      value: 'platinum',
      label: (
        <>
          <img src={platSvg} alt="GM" />
          <span>Platinum</span>
        </>
      ),
    },
    {
      value: 'gold',
      label: (
        <>
          <img src={goldSvg} alt="GM" />
          <span>Gold</span>
        </>
      ),
    },
    {
      value: 'silver',
      label: (
        <>
          <img src={silverSvg} alt="GM" />
          <span>Silver</span>
        </>
      ),
    },
    {
      value: 'bronze',
      label: (
        <>
          <img src={bronzeSvg} alt="GM" />
          <span>Bronze</span>
        </>
      ),
    },
    {
      value: 'iron',
      label: (
        <>
          <img src={ironSvg} alt="GM" />
          <span>Iron</span>
        </>
      ),
    },
  ];
  const customStyles: any = {
    indicatorsContainer: (base: any, state: any) => ({
      ...base,
      backgroundColor: 'rgb(128, 51, 61)',
    }),
    input: (base: any, state: any) => ({
      ...base,
      minWidth: '130px',
      borderRadius: '6px',
    }),
    control: (base: any, state: any) => ({
      ...base,
      backgroundColor: 'rgb(128, 51, 61)',
      border: '1px solid rgb(128,51,61)',
      borderRadius: '6px',
    }),
    option: (base: any, state: any) => ({
      ...base,
      backgroundColor: state.isFocused
        ? 'rgb(172, 90, 101)'
        : 'rgb(128, 51, 61)',
    }),
    container: (base: any, state: any) => ({
      ...base,
      backgroundColor: 'rgb(128, 51, 61)',
      cursor: 'pointer',
      borderRadius: '6px',
    }),
    menu: (base: any, state: any) => ({
      ...base,
      backgroundColor: 'rgb(128, 51, 61)',
    }),
  };

  return (
    <div className="builds">
      <div className="filters">
        <div className="filter-span nav-item">
          <img src={filterSvg} alt="filters" />
          <span>Filters</span>
        </div>
        <div className="roles nav-item">
          <img src={topSvg} alt="top" className="selected" />
          <img src={jungleSvg} alt="jungle" />
          <img src={midSvg} alt="mid" />
          <img src={botSvg} alt="bot" />
          <img src={supSvg} alt="support" />
        </div>
        <div className="divisions">
          <Select
            styles={customStyles}
            closeMenuOnSelect={true}
            options={options}
          />
        </div>
        <div className="matchup-filter nav-item">
          <input type="text" placeholder="vs. Champion..." />
        </div>
        <div className="queue-type nav-item">
          <div className="dropdown">
            <span>Solo Duo</span>
            <ul className="dropdown-content">
              <li>Flex</li>
              <li>Normal</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="stats">stats %%%</div>
      <div className="matchups">match-ups</div>
      <div className="runes-summoners">runes and summoners</div>
      <div className="items">items</div>
      <div className="skills">skills</div>
    </div>
  );
};

export default Builds;
