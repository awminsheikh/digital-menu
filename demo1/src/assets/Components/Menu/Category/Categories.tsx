// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import categories from "./categoryList";
import Category from "./Category";
const Categories = () => {
  return <div className="w-full bg-yellow-400" dir="rtl">
     <Swiper className="p-3"
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
     {
categories.map((category) => (
    <SwiperSlide className= { category.id ==1 ? " bg-black rounded-lg" : ""}>
        <Category name={category.name} id={category.id} image={category.image} />
     </SwiperSlide>
))
     }
    </Swiper>
  </div>;
};

export default Categories;
