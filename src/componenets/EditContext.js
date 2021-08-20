import { createContext, useState } from "react";
import React from "react";

export const EditContext = createContext();

const EditContextProvider = ({ children }) => {
  const [id, setId] = useState();
  const [showEdit, setShowEdit] = useState(false);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  return (
    <EditContext.Provider
      value={{
        id,
        setId,
        showEdit,
        setShowEdit,
        name,
        setName,
        lastname,
        setLastname,
        fullname,
        setFullname,
        email,
        setEmail,
        password,
        setPassword,
        loginEmail,
        setLoginEmail,
        loginPassword,
        setLoginPassword,
      }}
    >
      {children}
    </EditContext.Provider>
  );
};

export default EditContextProvider;
