import React, { useState } from "react";
import { paginate } from "../componenets/pagination/paginate";
import { DashContext } from "./DashContext";

export const GamesContext = ({ children, courses }) => {
  const [gamesPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [dialog, setDialog] = useState();
  const games = paginate(courses, currentPage, gamesPerPage);
  const handleChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <DashContext.Provider
      value={{
        currentPage,
        handleChange,
        gamesPerPage,
        games,
        courses,
        dialog,
        setDialog,
      }}
    >
      {children}
    </DashContext.Provider>
  );
};
