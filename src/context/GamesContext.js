import React, { useState } from "react";
import { paginate } from "../componenets/pagination/paginate";
import EditDialog from "../componenets/privets/EditDialog";
import { DashContext } from "./DashContext";

export const GamesContext = ({ children, courses }) => {
  const [gamesPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [dialog, setDialog] = useState(false);
  const [editDialog, setEditDialog] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [course, setCourse] = useState({});
  const games = paginate(courses, currentPage, gamesPerPage);
  const handleChange = (page) => {
    setCurrentPage(page);
  };
  const editDialogDisplay = (course) => {
    setCourse(course);
    setEditDialog(true);
  };
  const deleteDialogDisplay = (course) => {
    setCourse(course);
    setDeleteDialog(true);
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
        editDialog,
        setEditDialog,
        course,
        setCourse,
        editDialogDisplay,
        setDeleteDialog,
        deleteDialogDisplay,
        deleteDialog,
      }}
    >
      {children}
    </DashContext.Provider>
  );
};
