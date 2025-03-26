import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useSwiper } from "swiper/react"
import "swiper/css";
import "swiper/css/navigation";
import CarouselLeftNavigation from "../Carousel/CarouselLeftNavigation/CarouselLeft";
import CarouselRightNavigation from "../Carousel/CarouselRightNavigation/CarouselRight";

const Controls = ({ data }) => {
    const swiper = useSwiper();

    useEffect(() => {
        swiper.slideTo(0);
    }, [data, swiper]);
    
    return null;
};

const Carousel = ({ data, renderComponent }) => {
  return (
    <div>
      <Swiper
        style={{ padding: "0px 20px", position: "relative" }}
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView={7}
        spaceBetween={60}
        allowTouchMove
      >
        <Controls data={data} />
        <div  style={{ position: "absolute", top: "35%", left: 0, right: 0, transform: "translateY(-50%)", zIndex: 10 }}>
          <CarouselLeftNavigation />
          <CarouselRightNavigation />
        </div>

        {data.map((ele) => (
          <SwiperSlide key={ele.id}>{renderComponent(ele)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
