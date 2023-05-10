import axios from 'axios';

const getChampion = async (championName: string) => {
  //   const currChampion = await axios.get(
  //     `http://localhost:4000/api/champions/${championName}`
  //   );
  const currChampion = await axios.get(
    `http://ddragon.leagueoflegends.com/cdn/13.9.1/data/en_US/champion/${championName}.json`
  );
  console.log('currChampion', currChampion);
  return currChampion.data.data[championName];
};

const getChampions = async () => {
  const championList = await axios.get(`http://localhost:4000/api/champions`);
  return championList.data.data;
};

const getDdragonSkillImage = async (skill: string) => {
  const skillImage = await axios.get(
    `http://ddragon.leagueoflegends.com/cdn/12.7.1/img/passive/${skill}.png`
  );

  return skillImage.data;
};

export const riotAPIService = {
  getChampion,
  getChampions,
  getDdragonSkillImage,
};
