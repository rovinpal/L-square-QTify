import React from "react";
import { useSwiper } from "swiper/react";
import { IconButton } from "@mui/material";
import { ChevronRight } from "@mui/icons-material";

const CarouselRightNavigation = () => {
  const swiper = useSwiper();

  return (
    <IconButton
      onClick={() => swiper.slideNext()}
      sx={{
        position: "absolute",
        right: 10,
        top: "50%",
        transform: "translateY(-50%)",
        backgroundColor: "#34C94B",
        color: "white",
        "&:hover": { backgroundColor: "#34C94B" },
      }}
    >
      <ChevronRight />
    </IconButton>
  );
};

export default CarouselRightNavigation;
