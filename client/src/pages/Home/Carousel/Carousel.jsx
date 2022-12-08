// Import Library's Hook
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

// Import Services
import movieAPI from "../../../services/movieAPI";

// Import Module Css
import styles from "./styles.module.scss";

const Carousel = () => {
   const [banners, setBanners] = useState([]);

   useEffect(() => {
      (async () => {
         try {
            const data = await movieAPI.getBanner();
            setBanners(data);
         } catch (error) {
            console.log(error);
         }
      })();
   }, []);

   return (
      <section className={styles.carousel}>
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
      </section>
   );
};

export default Carousel;
