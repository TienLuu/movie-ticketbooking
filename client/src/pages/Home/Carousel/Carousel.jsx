import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Skeleton from "@mui/material/Skeleton";

import useRequest from "../../../hooks/useRequest";

import movieAPI from "../../../services/movieAPI";
import styles from "./styles.module.scss";

const Carousel = () => {
   const [banners, setBanners] = useState(null);
   const getBanners = useRequest(movieAPI.getBanners, { manual: true });

   useEffect(() => {
      getBanners
         .runAsync()
         .then((data) => {
            setBanners(data);
         })
         .catch((error) => {
            console.log(error);
         });
   }, []);

   return (
      <section className={styles.carousel}>
         {!banners ? (
            <Skeleton
               variant="rectangular"
               width="100%"
               height="60vh"
            ></Skeleton>
         ) : (
            <Swiper
               spaceBetween={10}
               pagination={{
                  clickable: true,
               }}
               speed={1000}
               navigation={true}
               modules={[Pagination, Navigation]}
               className="carousel-slide"
            >
               {banners.map((item) => (
                  <SwiperSlide key={item.maBanner}>
                     <Link to={`/movie/${item.maPhim}`}>
                        <img src={item.hinhAnh} alt={item.maPhim} />
                     </Link>
                  </SwiperSlide>
               ))}
            </Swiper>
         )}
      </section>
   );
};

export default Carousel;
