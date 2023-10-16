import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energyType: EnergyType = 'stamina';
  private static _instancesCount = 0;

  constructor(name: string) {
    super(name);
    Warrior._instancesCount += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior._instancesCount;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}