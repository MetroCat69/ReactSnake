// App.tsx
import React, { useContext, useEffect } from "react";
import { GameContext } from "./Reducer/GameContext";
import useKeyboard from "./hooks/useKeyboard";
import useGameLoop from "./hooks/useGameLoop";
import Board from "./Board/SBoard"; // Import the Board component

const App: React.FC = () => {
  const gameContext = useContext(GameContext);

  if (!gameContext) {
    throw new Error("GameContext must be used within a GameProvider");
  }

  const { state, dispatch } = gameContext;

  // Handle keyboard input
  useKeyboard(dispatch, state.direction);

  // Start the game loop
  useGameLoop(dispatch);

  useEffect(() => {
    if (state.gameOver) {
      const timer = setTimeout(() => {
        dispatch({ type: "RESET" });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [state.gameOver, dispatch]);

  return (
    <div>
      <h1>Snake Game</h1>
      {state.gameOver && (
        <div>
          <h1>Nice try game over</h1>
        </div>
      )}
      {!state.gameOver && (
        <div>
          <h1>go</h1>
          <Board
            width={state.board.width}
            height={state.board.height}
            snake={state.board.snake}
            food={state.board.food}
          />
        </div>
      )}
    </div>
  );
};

export default App;
