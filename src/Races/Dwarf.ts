import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints = 80;
  private static raceCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf.raceCount += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf.raceCount;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}