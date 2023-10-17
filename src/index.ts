import Battle, { PVP, PVE } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

const player1 = new Character('Lorien');
const player2 = new Character('Gandalf');
const player3 = new Character('Frodo');

player1.levelUp();
player1.levelUp();

const monster1 = new Monster(26, 30);
const monster2 = new Dragon(97);

const pvp = new PVP(player2, player3);
const pve = new PVE(player1, [monster1, monster2]);

function runBattles(battles: Battle[]) {
  for (let i = 0; i < battles.length; i += 1) {
    const battle = battles[i];
    battle.fight();
  }
}

export { player1, player2, player3, monster1, monster2, pvp, pve, runBattles };
