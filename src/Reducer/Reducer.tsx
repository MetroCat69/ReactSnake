// reducer.ts
import { GameState, Action, initialState } from "../types/Gametypes";
// import { Snake, Position } from "../types/Boardtypes";
// import { isNull } from "lodash";
import { CheckSnake, generateNewFoodPos, MoveSnake } from "../Snake/SnakeUtils";

export const gameReducer = (state: GameState, action: Action): GameState => {
  console.log(state);
  switch (action.type) {
    case "MOVE":
      const movedSnake = MoveSnake(state.board.snake, state.direction);
      if (CheckSnake(movedSnake, state)) {
        return { ...state, gameOver: true };
      }

      if (
        movedSnake[0][0] === state.board.food[0] &&
        movedSnake[0][1] === state.board.food[1]
      ) {
        let newFoodPos = generateNewFoodPos(state);
        if (newFoodPos === null) {
          // TODO VICTORY SCREEN
          return { ...state };
        }

        let newSnake = state.board.snake;
        let wtf = movedSnake[0];
        newSnake = [wtf, ...newSnake];
        return {
          ...state,
          board: {
            ...state.board,
            snake: newSnake,
            food: newFoodPos,
          },
        };
      }
      return { ...state, board: { ...state.board, snake: movedSnake } };

    case "CHANGE_DIRECTION":
      return { ...state, direction: action.payload };

    case "GAME_OVER":
      return { ...state, gameOver: true };

    case "RESET":
      return { ...initialState };

    default:
      return state;
  }
};
