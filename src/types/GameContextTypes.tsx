import React, { ReactNode } from "react";
import { GameState, Action } from "../types/Gametypes";

export interface GameContextProps {
  state: GameState;
  dispatch: React.Dispatch<Action>;
}

export interface GameProviderProps {
  children: ReactNode;
}
