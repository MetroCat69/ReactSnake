import React from "react";
import styled from "styled-components";
import { CellType } from "../types/Boardtypes";
// export type CellType = "cell" | "snake" | "food";

// interface CellProps {
//   type?: CellType; // type prop is now optional
// }
export interface CellProps {
  type?: CellType; // type prop is now optional
}
const StyledCell = styled.div<{ type: CellType }>`
  width: 20px;
  height: 20px;
  background-color: ${({ type }) => {
    switch (type) {
      case "cell":
        return "#ccc";
      case "snake":
        return "green";
      case "food":
        return "red";
      default:
        return "#ccc";
    }
  }};
`;

const Cell: React.FC<CellProps> = ({ type = "cell" }) => {
  // Provide a default value of 'cell' if type prop is not provided
  return <StyledCell type={type} />;
};

export default Cell;
