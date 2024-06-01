import { Snake, Position } from "../types/Boardtypes";
import { GameState } from "../types/Gametypes";

const getNextPosition = (snake: Snake, direction: string): Position => {
  const head = snake[0];
  const x = head[1];
  const y = head[0];
  switch (direction) {
    case "UP":
      return [y - 1, x];
    case "DOWN":
      return [y + 1, x];
    case "LEFT":
      return [y, x - 1];
    case "RIGHT":
      return [y, x + 1];
    default:
      return head;
  }
};

const MoveSnake = (snake: Snake, direction: string): Snake => {
  const newHead = getNextPosition(snake, direction);
  let newSnake: Snake = [newHead];
  for (let i = 1; i < snake.length; i++) {
    newSnake.push(snake[i - 1]);
  }
  return newSnake;
};

const generateNewFoodPos = (state: GameState): Position | null => {
  let y = Math.floor(Math.random() * state.board.height);
  let x = Math.floor(Math.random() * state.board.width);
  return [y, x];
};

const CheckSnake = (snake: Snake, state: GameState): boolean => {
  let head = snake[0];
  let xHead = head[1];
  let yHead = head[0];

  if (
    !(
      0 <= xHead &&
      xHead < state.board.width &&
      0 <= yHead &&
      yHead < state.board.height
    )
  ) {
    return true;
  }
  if (
    snake
      .slice(1)
      .some((segment) => segment[0] === head[0] && segment[1] === head[1])
  ) {
    return true;
  }
  return false;
};

export { CheckSnake, generateNewFoodPos, MoveSnake };
