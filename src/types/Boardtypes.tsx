export type CellType = "cell" | "snake" | "food";

export type Position = [number, number];

export type Snake = Array<Position>;

export interface BoardProps {
  width: number;
  height: number;
  snake: Snake;
  food: Position;
}
