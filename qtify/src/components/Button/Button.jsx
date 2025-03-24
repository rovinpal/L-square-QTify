import React from "react";
import styles from "./Button.module.css";
import { Button as MUIButton  } from "@mui/material"

const FeedBackButton = ({ onClick }) => {
  return (
    <MUIButton 
      className={styles.button} 
      onClick={onClick}
      variant="contained"
      sx={{
        backgroundColor: "black",
        fontWeight: 600,
        color: "#34C94B",
        fontSize: "18px",
        letterSpacing: "0.25px",
        fontFamily: "'Poppins', sans-serif",
        borderRadius: "12px",
        textTransform: "none",
        "&:hover": { backgroundColor: "#333" }, 
      }}
    >
      Give Feedback
    </MUIButton>
  );
};

export default FeedBackButton;
