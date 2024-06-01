import React from "react";
import styled from "styled-components";
import Cell from "./Cell";
import { CellType, BoardProps } from "../types/Boardtypes";

interface StyledBoardProps {
  width: number;
}

const StyledBoard = styled.div<StyledBoardProps>`
  display: grid;
  grid-template-columns: repeat(${({ width }) => width}, 20px);
  grid-gap: 1px;

  justify-content: center;
  align-items: center;
  background-color: #333;
  padding: 10px;
`;

const Board: React.FC<BoardProps> = ({ width, height, snake, food }) => {
  const cells: CellType[][] = [];

  for (let row = 0; row < height; row++) {
    cells[row] = [];
    for (let col = 0; col < width; col++) {
      cells[row][col] = "cell";
    }
  }

  for (const [r, c] of snake) {
    cells[r][c] = "snake";
  }

  cells[food[0]][food[1]] = "food";

  return (
    <StyledBoard width={width}>
      {cells.map((row, rowIdx) =>
        row.map((cellType, colIdx) => (
          <Cell key={`${rowIdx}-${colIdx}`} type={cellType} />
        ))
      )}
    </StyledBoard>
  );
};

export default Board;
