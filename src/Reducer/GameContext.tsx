// GameContext.tsx

import React, { createContext, useReducer } from "react";
import { initialState } from "../types/Gametypes";
import { GameContextProps, GameProviderProps } from "../types/GameContextTypes";
import { gameReducer } from "./Reducer";

const GameContext = createContext<GameContextProps | undefined>(undefined);

const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

export { GameProvider, GameContext };
