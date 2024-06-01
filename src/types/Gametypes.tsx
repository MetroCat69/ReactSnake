import { BoardProps } from "./Boardtypes";

export type direction = "UP" | "DOWN" | "LEFT" | "RIGHT";

export interface GameState {
  board: BoardProps;
  direction: direction;
  gameOver: boolean;
}

export const initialState: GameState = {
  board: {
    width: 10,
    height: 10,
    snake: [[1, 1]],
    food: [2, 2],
  },
  direction: "RIGHT",
  gameOver: false,
};

export type Action =
  | { type: "MOVE" }
  | { type: "CHANGE_DIRECTION"; payload: direction }
  | { type: "EAT_FOOD" }
  | { type: "GAME_OVER" }
  | { type: "RESET" };
