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
import { ReactElement, useContext, useEffect, useState } from 'react';
import { riotAPIService } from 'renderer/services/riotapi.service';
import { ChampionsContext } from 'renderer/App';

const animatedComponents = makeAnimated();

const Builds: React.FC = () => {
  const { championsList, updateChampionsList } = useContext(ChampionsContext);
  const [matchup, setMatchup] = useState<string>('');
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [matchupList, setMatchupList] = useState<
    { value: string; label: ReactElement }[]
  >([]);
  const divisions = [
    {
      value: 'challenger',
      label: (
        <div className="flex-ai-center">
          <img src={challengerSvg} alt="challenger" />
          <span>Challenger</span>
        </div>
      ),
    },
    {
      value: 'grandmaster',
      label: (
        <div className="flex-ai-center">
          <img src={grandMasterSvg} alt="GM" />
          <span>Grandmaster</span>
        </div>
      ),
    },
    {
      value: 'master',
      label: (
        <div className="flex-ai-center">
          <img src={masterSvg} alt="GM" />
          <span>Master</span>
        </div>
      ),
    },
    {
      value: 'diamond',
      label: (
        <div className="flex-ai-center">
          <img src={diamondSvg} alt="GM" />
          <span>Diamond</span>
        </div>
      ),
    },
    {
      value: 'platinum',
      label: (
        <div className="flex-ai-center">
          <img src={platSvg} alt="GM" />
          <span>Platinum</span>
        </div>
      ),
    },
    {
      value: 'gold',
      label: (
        <div className="flex-ai-center">
          <img src={goldSvg} alt="GM" />
          <span>Gold</span>
        </div>
      ),
    },
    {
      value: 'silver',
      label: (
        <div className="flex-ai-center">
          <img src={silverSvg} alt="GM" />
          <span>Silver</span>
        </div>
      ),
    },
    {
      value: 'bronze',
      label: (
        <div className="flex-ai-center">
          <img src={bronzeSvg} alt="GM" />
          <span>Bronze</span>
        </div>
      ),
    },
    {
      value: 'iron',
      label: (
        <div className="flex-ai-center">
          <img src={ironSvg} alt="GM" />
          <span>Iron</span>
        </div>
      ),
    },
  ];
  const customStyles: any = {
    indicatorsContainer: (base: any, state: any) => ({
      ...base,
      backgroundColor: '#1e282d',
      display: 'flex',
      alignItems: 'center',
    }),
    input: (base: any, state: any) => ({
      ...base,
      borderRadius: '6px',
    }),
    control: (base: any, state: any) => ({
      ...base,
      backgroundColor: '#1e282d',
      // border: '1px solid rgb(128,51,61)',
      borderRadius: '6px',
    }),
    option: (base: any, state: any) => ({
      ...base,
      display: 'flex',
      alignItems: 'center',
      borderRadius: '0px',
      backgroundColor: state.isFocused ? '#1E282D' : '#3c3c41',
    }),
    container: (base: any, state: any) => ({
      ...base,
      backgroundColor: '#1e282d',
      cursor: 'pointer',
      borderRadius: '6px',
      width: '190px',
    }),
    menu: (base: any, state: any) => ({
      ...base,
      backgroundColor: '#3c3c41',
    }),
    valueContainer: (base: any, state: any) => ({
      ...base,
      display: 'flex',
      alignItems: 'center',
    }),
  };
  const queueTypes = [
    {
      value: 'soloduo',
      label: (
        <div className="flex-ai-center">
          <img src={challengerSvg} alt="challenger" />
          <span>Solo Duo</span>
        </div>
      ),
    },
    {
      value: 'flex',
      label: (
        <div className="flex-ai-center">
          <img src={grandMasterSvg} alt="challenger" />
          <span>Flex</span>
        </div>
      ),
    },
    {
      value: 'normal',
      label: (
        <div className="flex-ai-center">
          <img src={masterSvg} alt="challenger" />
          <span>Normals</span>
        </div>
      ),
    },
  ];

  useEffect(() => {
    makeMatchupPicker();
  }, []);

  const makeMatchupPicker = () => {
    const temp = Object.values(championsList).map((ch) => {
      return {
        value: ch.name,
        label: (
          <>
            <img src={ch.squareImage} />
            <span>{ch.name}</span>
          </>
        ),
      };
    });
    console.log(temp);
    setMatchupList(temp);
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
            isSearchable={false}
            styles={customStyles}
            closeMenuOnSelect={true}
            options={divisions}
          />
        </div>
        <div className="matchup-filter ">
          <Select
            placeholder="vs. Champion..."
            styles={customStyles}
            closeMenuOnSelect={true}
            options={matchupList}
          />
        </div>
        <div className="queue-type">
          <Select
            placeholder="Queue Type"
            styles={customStyles}
            closeMenuOnSelect={true}
            options={queueTypes}
          />
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
