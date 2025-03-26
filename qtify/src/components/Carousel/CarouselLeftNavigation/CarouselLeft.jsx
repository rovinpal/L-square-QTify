import React from "react";
import { useSwiper } from "swiper/react";
import { IconButton } from "@mui/material";
import { ChevronLeft } from "@mui/icons-material";

const CarouselLeftNavigation = () => {
  const swiper = useSwiper();

  return (
    <IconButton
      onClick={() => swiper.slidePrev()}
      sx={{
        position: "absolute",
        left: 10,
        top: "50%",
        transform: "translateY(-50%)",
        backgroundColor: "#34C94B",
        color: "white",
        "&:hover": { backgroundColor: "#34C94B" },
      }}
    >
      <ChevronLeft />
    </IconButton>
  );
};

export default CarouselLeftNavigation;
