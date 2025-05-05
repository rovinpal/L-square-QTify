import React, { createContext, useContext, useState } from "react";

const FeedbackContext = createContext();

export const useFeedback = () => useContext(FeedbackContext);

export const FeedbackProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <FeedbackContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </FeedbackContext.Provider>
  );
};
