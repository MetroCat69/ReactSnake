// useKeyboard.ts
import { useEffect, useCallback } from "react";
import { Action } from "../types/Gametypes";
import { direction } from "../types/Gametypes";

const useKeyboard = (
  dispatch: React.Dispatch<Action>,
  currentDirection: direction
) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp":
          if (currentDirection !== "DOWN")
            dispatch({ type: "CHANGE_DIRECTION", payload: "UP" });
          break;
        case "ArrowDown":
          if (currentDirection !== "UP")
            dispatch({ type: "CHANGE_DIRECTION", payload: "DOWN" });
          break;
        case "ArrowLeft":
          if (currentDirection !== "RIGHT")
            dispatch({ type: "CHANGE_DIRECTION", payload: "LEFT" });
          break;
        case "ArrowRight":
          if (currentDirection !== "LEFT")
            dispatch({ type: "CHANGE_DIRECTION", payload: "RIGHT" });
          break;
      }
    },
    [dispatch, currentDirection]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);
};

export default useKeyboard;
