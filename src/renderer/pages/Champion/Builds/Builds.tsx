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
import { ChampionsContext, ThemeContext } from 'renderer/App';
import { ChampionContext } from '../Champion';
import { Matchups } from 'renderer/services/lol_interfaces';

const animatedComponents = makeAnimated();

const Builds: React.FC = () => {
  const { championsList, updateChampionsList } = useContext(ChampionsContext);
  const { theme, updateTheme } = useContext(ThemeContext);
  const { champion, updateChampion } = useContext(ChampionContext);
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
    // console.log('champion', champion);
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
      <div className="stats">
        <div className="tier">
          <span>{champion.tier}</span>
          <span>Tier</span>
        </div>
        <div className="winrate">
          <span>{champion.winRate}%</span>
          <span>Win Rate</span>
        </div>
        <div className="pickrate">
          <span>{champion.pickRate}%</span>
          <span>Pick Rate</span>
        </div>
        <div className="banrate">
          <span>{champion.banRate}%</span>
          <span>Ban Rate</span>
        </div>
        <div className="matches">
          <span>
            {String(champion.matches).replace(/(.)(?=(\d{3})+$)/g, '$1,')}
          </span>
          <span>Matches</span>
        </div>
      </div>
      <div className="matchups">
        <div
          className="matchups-title"
          style={{ borderLeft: `2px solid ${theme.border}` }}
        >
          <span className="matchups-title-main">Hard Matchups</span>
          <span className="matchups-title-second">
            Champions that counter {champion.name}
          </span>
        </div>
        <div className="matchups-cards">
          {champion.matchups.map((mu: Matchups) => {
            console.log('mu', mu);
            console.log('championsList', championsList);
            return (
              <div className="matchup-card">
                <img src={championsList[mu.name].squareImage} />
                <span>{mu.name}</span>
                <span>{mu.winrate}</span>
                <span>{mu.matches}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="runes-summoners">runes and summoners</div>
      <div className="items">items</div>
      <div className="skills">skills</div>
    </div>
  );
};

export default Builds;
