// Import Library's Hook
import { useState } from "react";

// Import Library's Component
import cn from "classnames";

// Import Components
import ModalVideo from "../../../layouts/ModalVideo";
import Loading from "../../../layouts/Loading";

// Import Services
import formatDate from "../../../utils/formatDate";

// Import Module Css
import styles from "./styles.module.scss";

const Poster = ({ movieInfor }) => {
   const [isFullPara, setIsFullPara] = useState(false);
   const [isOpenModal, setIsOpenModal] = useState(false);

   if (!movieInfor) return <Loading />;

   // Format show times and description
   const { day, month, year } = formatDate(movieInfor.ngayKhoiChieu);
   const shortDesc = movieInfor.moTa.substring(0, movieInfor.moTa.length - 60);

   // Open Modal Video
   const handleClickTrailer = () => {
      setIsOpenModal(!isOpenModal);
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
                           <svg
                              viewBox="0 0 48 48"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <g fill="none" fillRule="evenodd">
                                 <circle
                                    stroke="#FFF"
                                    strokeWidth="2"
                                    fillOpacity=".24"
                                    fill="#000"
                                    cx="24"
                                    cy="24"
                                    r="23"
                                 ></circle>
                                 <path
                                    d="M34.667 24.335c0 .515-.529.885-.529.885l-14.84 9.133c-1.08.704-1.965.182-1.965-1.153V15.467c0-1.338.884-1.856 1.968-1.153L34.14 23.45c-.002 0 .527.37.527.885Z"
                                    fill="#FFF"
                                    fillRule="nonzero"
                                 ></path>
                              </g>
                           </svg>
                        </div>
                        <ModalVideo
                           isOpen={isOpenModal}
                           onClose={handleClickTrailer}
                           url={movieInfor.trailer}
                           desc={movieInfor.moTa}
                           title={movieInfor.tenPhim}
                        />
                     </div>
                  </div>
                  <div className={styles.movieDescription}>
                     <div className={styles.ageLimit}>13+</div>
                     <h1>{movieInfor.tenPhim}</h1>
                     <h3>Nội dung</h3>
                     <div
                        className={cn({
                           [styles.text]: true,
                           [styles.showMore]: true,
                        })}
                     >
                        {isFullPara ? movieInfor.moTa : shortDesc}
                        <span onClick={() => setIsFullPara(!isFullPara)}>
                           {isFullPara ? "Thu gọn" : "...Xem thêm"}
                        </span>
                     </div>
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
