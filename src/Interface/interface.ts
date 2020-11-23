interface IGame {
  title: string;
  description: string;
  genre: string;
  platform: string[];
  getSimilars?: (title: string) => void;
}

const rdr: IGame = {
  title: 'Red Dead Redemption',
  description: 'The best game in the world',
  genre: 'Action',
  platform: ['PS4', 'PC'],
  getSimilars: (title: string) => {
    console.log(`Similar games to ${title}: GTA V, Mafia, A Plague Tale`);
  },
};

interface DLC extends IGame {
  originalGame: IGame;
  newContent: string[];
}

const johnMarston: DLC = {
  title: 'Red Dead Redemption - John Marston',
  description: 'You play as John before the original game',
  genre: 'Action',
  platform: ['PC'],
  originalGame: rdr,
  newContent: ['3 hours story, new characteres'],
};

/*console.log(rdr.title);*/
if (rdr.getSimilars) rdr.getSimilars(rdr.title);
/* Se não fizer um if nao pode chamar, pois tem a possibilidade de ser undefined,
pois getSimilars é opcional agora */

console.log(johnMarston);
