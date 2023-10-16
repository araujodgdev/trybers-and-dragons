import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType = 'mana';
  private static _instancesCount = 0;

  constructor(name: string) {
    super(name);
    Necromancer._instancesCount += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._instancesCount;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}