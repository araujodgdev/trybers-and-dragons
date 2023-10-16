import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints = 99;
  private static raceCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf.raceCount += 1;
  }

  static createdRacesInstances(): number {
    return Elf.raceCount;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}