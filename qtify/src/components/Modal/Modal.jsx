import React from "react";
import { Modal, Box, Typography, TextField, IconButton, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useFeedback } from "../../context/FeedbackContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFFFFF",
  color: "#121212",
  padding: "2rem",
  borderRadius: "12px",
  width: "90%",
  maxWidth: "500px",
  boxShadow: 24,
  outline: "none",
};

const FeedBackModal = () => {
  const { isOpen, closeModal } = useFeedback();

  const handleSubmit = (e) => {
    e.preventDefault();
    closeModal();
  };

  return (
    <Modal
      open={isOpen}
      onClose={closeModal}
      aria-labelledby="feedback-modal"
      closeAfterTransition
      BackdropProps={{
        style: { backgroundColor: "rgba(0, 0, 0, 0.9)" },
      }}
    >
      <Box sx={style}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="h6" sx={{ textAlign: "center", width: "100%", fontSize: "25px", fontWeight: 700 }}>
            Feedback
          </Typography>
          <IconButton onClick={closeModal} sx={{ position: "absolute", top: 8, right: 8, color: "#121212" }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <form onSubmit={handleSubmit} style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
          <TextField
            label="Full Name"
            fullWidth
            InputLabelProps={{ style: { color: "#121212" } }}
            InputProps={{
              style: { color: "#121212" },
              sx: {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#34C94B",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#34C94B",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#34C94B",
                },
              },
            }}
          />
          <TextField
            label="Email ID"
            type="email"
            fullWidth
            InputLabelProps={{ style: { color: "#121212" } }}
            InputProps={{
              style: { color: "#121212" },
              sx: {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#34C94B",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#34C94B",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#34C94B",
                },
              },
            }}
          />
          <TextField
            label="Subject"
            fullWidth
            InputLabelProps={{ style: { color: "#121212" } }}
            InputProps={{
              style: { color: "#121212" },
              sx: {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#34C94B",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#34C94B",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#34C94B",
                },
              },
            }}
          />
          <TextField
            label="Description"
            multiline
            rows={4}
            fullWidth
            InputLabelProps={{ style: { color: "#121212" } }}
            InputProps={{
              style: { color: "#121212" },
              sx: {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#34C94B",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#34C94B",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#34C94B",
                },
              },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              margin: "5px auto",
              fontSize: "20px",
              backgroundColor: "#34C94B",
              color: "#FFFFFF",
              fontWeight: "600",
              width: "250px",
              height: "50px",
              textTransform: "none",
              borderRadius: "8px",
              "&:hover": { backgroundColor: "#2fae42" },
            }}
          >
            Submit Feedback
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default FeedBackModal;
