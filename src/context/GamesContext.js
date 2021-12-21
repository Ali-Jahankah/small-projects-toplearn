import React, { useEffect, useState } from "react";
import { paginate } from "../componenets/pagination/paginate";
import { DashContext } from "./DashContext";

export const GamesContext = ({ children, courses }) => {
  const [gamesPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [dialog, setDialog] = useState(false);
  const [editDialog, setEditDialog] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [course, setCourse] = useState({});
  const [search, setSearch] = useState([]);
  const [courseList, setCourseList] = useState([]);
  useEffect(() => {
    setCourseList(courses);
  }, [courses]);

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
  const filteredList = courseList.filter((item) => item.name.includes(search));
  const games = paginate(filteredList, currentPage, gamesPerPage);
  console.log(filteredList);
  console.log(games);

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
        setSearch,
        filteredList,
        courseList,
      }}
    >
      {children}
    </DashContext.Provider>
  );
};
