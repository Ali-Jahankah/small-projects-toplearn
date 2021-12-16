import { createContext } from "react";

export const DashContext = createContext({
  gamesPerPage: 4,
  currentPage: 1,
  setCurrentPage: () => {},
  games: [],
});
