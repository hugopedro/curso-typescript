interface IGame {
  title: string;
  description: string;
  genre: string;
  platform: string[];
  getSimilars: (title: string) => void;
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

console.log(rdr.title);
rdr.getSimilars(rdr.title);
