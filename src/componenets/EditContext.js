import { createContext, useState } from "react";

export const EditContext = createContext();

const EditContextProvider = ({ children }) => {
  const [id, setId] = useState();
  const [showEdit, setShowEdit] = useState(false);
  return (
    <EditContext.Provider value={{ id, setId, showEdit, setShowEdit }}>
      {children}
    </EditContext.Provider>
  );
};

export default EditContextProvider;
