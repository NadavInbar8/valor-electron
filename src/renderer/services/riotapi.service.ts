const getChampion = async (championName: string) => {
  const response = await fetch(
    `http://localhost:4000/api/champions/${championName}`
  ).then((res) => {
    return res.json();
  });
  if (response.success) return response.data[championName];
  // if (response.status >= 200 && response.status < 300)
  //   return response.data.data[championName];
};

const getChampions = async () => {
  const championList = await fetch(`http://localhost:4000/api/champions`).then(
    (res) => res.json()
  );
  return championList.data;
};

const getDdragonSkillImage = async (skill: string) => {
  const skillImage = await fetch(
    `http://ddragon.leagueoflegends.com/cdn/12.7.1/img/passive/${skill}.png`
  ).then((res) => res.json());

  return skillImage.data;
};

export const riotAPIService = {
  getChampion,
  getChampions,
  getDdragonSkillImage,
};
