export default abstract class Race {
  private _name: string;
  private _dexterity: number;
  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
  }

  private static raceCount = 0;
  private static inRaceClass = true;

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  static createdRacesInstances(): number {
    if (Race.inRaceClass) {
      throw new Error('Not implemented'); 
    }

    return Race.raceCount;
  }

  abstract get maxLifePoints(): number;
}
