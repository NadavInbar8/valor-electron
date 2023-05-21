import { Champion } from './lol_interfaces';

export interface ChampionsListContext {
  championsList: {[key:string]:Champion};
  updateChampionsList: (list: {[key:string]:Champion}) => void;
}
export interface iChampionContext {
  champion: Champion;
  updateChampion: (ch: Champion) => void;
}
