// useGameLoop.ts
import { useEffect } from "react";
import { Action } from "../types/Gametypes";

const useGameLoop = (dispatch: React.Dispatch<Action>) => {
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: "MOVE" });
    }, 200); // 30 fps

    return () => clearInterval(interval);
  }, [dispatch]);
};

export default useGameLoop;
