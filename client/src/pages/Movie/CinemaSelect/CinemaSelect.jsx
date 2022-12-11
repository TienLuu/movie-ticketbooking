// Import Library's Component
import classnames from "classnames/bind";

// Import Components
import InputSelectCinema from "../../../layouts/InputSelectCinema";
import ShowtimesList from "../../../layouts/ShowtimesList";

// Import Services
import formatDate from "../../../utils/formatDate";

// Import Module Css
import styles from "./styles.module.scss";

const cn = classnames.bind(styles);

const CinemaSelect = ({
   isActive,
   cinemaBranch,
   onSelectCinemaBranch,
   logo,
}) => {
   const { tenCumRap, diaChi, maCumRap, lichChieuPhim } = cinemaBranch;

   // Format show times
   const showtimesList = lichChieuPhim.map((item) => {
      return {
         ...item,
         ngayChieuGioChieu: formatDate(item.ngayChieuGioChieu),
      };
   });

   return (
      <div className={styles.cinemaSelect}>
         <div
            onClick={() => onSelectCinemaBranch(maCumRap)}
            className={styles.inputSelectCinema}
         >
            <InputSelectCinema
               isIcon={true}
               isMobile={false}
               logo={logo}
               cinemaBranchName={tenCumRap}
               cinemaBranchAddress={diaChi}
            />
         </div>
         <div
            className={cn("movieList", {
               active: isActive,
            })}
         >
            {isActive ? (
               <ShowtimesList showtimesList={showtimesList} />
            ) : undefined}
         </div>
      </div>
   );
};

export default CinemaSelect;
