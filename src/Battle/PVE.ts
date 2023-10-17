import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';

export default class PVE extends Battle {
  constructor(private _player: Fighter, private _horde: SimpleFighter[]) {
    super(_player);
  }

  override fight(): number {
    for (let i = 0; i < this._horde.length;) {
      while (
        this._player.lifePoints !== -1
        && this._horde[i].lifePoints !== -1
      ) {
        this._player.attack(this._horde[i]);
        this._horde[i].attack(this._player);
      }
      i += 1;
    }

    return super.fight();
  }
}
