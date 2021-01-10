export interface Score {
  PlayerA: Player;
  PlayerB: Player;
  sport: string;
  time: number;
}

export interface Player {
  name: string;
  sets: number;
}
