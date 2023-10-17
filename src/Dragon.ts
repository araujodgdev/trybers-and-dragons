import Monster from './Monster';

export default class Dragon extends Monster {
  constructor(strength = 100) {
    super(999, strength);
  }

  get lifePoints(): number {
    return super.lifePoints;
  }

  get strength(): number {
    return super.strength;
  }

  attack(enemy: Monster): void {
    super.attack(enemy);
  }

  receiveDamage(attackPoints: number): number {
    return super.receiveDamage(attackPoints);
  }
}