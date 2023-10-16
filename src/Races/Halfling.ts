import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints = 60;
  private static raceCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling.raceCount += 1;
  }

  static createdRacesInstances(): number {
    return Halfling.raceCount;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}