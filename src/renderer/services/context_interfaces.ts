import { Champion } from './lol_interfaces';

export interface ChampionsListContext {
  championsList: Champion[];
  updateChampionsList: (list: Champion[]) => void;
}
