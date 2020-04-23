export enum PlayingState {
  notStarted,
  showingNextInput,
  waitingOnPlayer,
  GameOver
}

export interface GameState {
  pattern: Array<number>;
  playerPattern: Array<number>;
  tiles: Array<boolean>;
  playingState: PlayingState;
  catPictureUrl?: string;
  score: number;
}
