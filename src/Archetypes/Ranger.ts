import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _energyType: EnergyType = 'stamina';
  private static _instancesCount = 0;

  constructor(name: string) {
    super(name);
    Ranger._instancesCount += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger._instancesCount;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}