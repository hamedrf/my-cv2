"use client";
import React, { createContext, useContext, useState } from "react";

interface ShowModalType {
  showModal: boolean;
  toggleModal: () => void;
}
export const ShowModalContext = createContext<ShowModalType>({
  showModal: false,
  toggleModal: () => {},
});

export const ShowModalProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <ShowModalContext.Provider value={{ showModal, toggleModal }}>
      {children}
    </ShowModalContext.Provider>
  );
};

export const useShowModal = () => useContext(ShowModalContext);
