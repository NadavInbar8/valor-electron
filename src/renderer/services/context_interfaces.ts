import { Champion } from './lol_interfaces';

export interface ChampionsListContext {
  championsList: Champion[];
  updateChampionsList: (list: Champion[]) => void;
}
export interface iChampionContext {
  champion: Champion;
  updateChampion: (ch: Champion) => void;
}
