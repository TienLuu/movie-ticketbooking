import classnames from "classnames/bind";

import useToggle from "../../../hooks/useToggle";
import ModalVideo from "../../../layouts/components/ModalVideo";
import Paragraph from "../../../components/Paragraph";
import { ButtonPlay } from "../../../components/SVG";

import formatDate from "../../../utils/formatDate";
import styles from "./styles.module.scss";

const cn = classnames.bind(styles);

const Poster = ({ movieInfor }) => {
   const [value, toggleValue] = useToggle(false);

   // Format show times
   const { day, month, year } = formatDate(movieInfor.ngayKhoiChieu);

   // Open Modal Video
   const handleClickTrailer = () => {
      toggleValue(!value);
   };

   return (
      <>
         <div className={styles.moviePoster}>
            <div className={styles.background}></div>
            <div className={styles.container}>
               <div className={styles.wrapper}>
                  <div className={styles.movieImg}>
                     <div>
                        <img src={movieInfor.hinhAnh} alt={movieInfor.maPhim} />
                        <div
                           className={styles.btnTrailer}
                           onClick={handleClickTrailer}
                        >
                           <ButtonPlay />
                        </div>
                        <ModalVideo
                           isOpen={value}
                           onClose={handleClickTrailer}
                           url={movieInfor.trailer}
                           desc={movieInfor.moTa}
                           title={movieInfor.tenPhim}
                        />
                     </div>
                  </div>
                  <div className={styles.movieDescription}>
                     <div
                        className={cn("ageLimit", { under18: !movieInfor.hot })}
                     >
                        {movieInfor.hot ? "18+" : "16+"}
                     </div>
                     <h1>{movieInfor.tenPhim}</h1>
                     <h3>Nội dung</h3>
                     <Paragraph
                        maxCharacters={200}
                        paragraph={movieInfor.moTa}
                     />
                     <div className={styles.anotherDescription}>
                        <div className={styles.date}>
                           <p>Ngày chiếu</p>
                           <span>{`${day}/${month}/${year}`}</span>
                        </div>
                        <div className={styles.type}>
                           <p>Thể loại</p>
                           <span>
                              Khoa Học Viễn Tưởng, Phiêu Lưu, Hành Động
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Poster;
