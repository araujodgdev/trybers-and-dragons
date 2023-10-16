import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints = 74;
  private static raceCount = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc.raceCount += 1;
  }

  static createdRacesInstances(): number {
    return Orc.raceCount;  
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}