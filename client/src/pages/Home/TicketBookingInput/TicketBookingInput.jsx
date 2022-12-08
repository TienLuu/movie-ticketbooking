// Import Library's Component
import MenuItem from "@mui/material/MenuItem";

// Import Components
import InputSelect from "../../../components/InputSelect";
import ButtonSVG from "../../../components/ButtonSVG";

// Import Module Css
import styles from "./styles.module.scss";

const TicketBookingInput = ({ movies, movieDetails }) => {
   const movieSchedule = movieDetails.find(
      (item) => item.maHeThongRap === "BHDStar"
   );

   const moveTimes = movieSchedule.cumRapChieu.find(
      (item) => item.maCumRap === "bhd-star-cineplex-3-2"
   );

   return (
      <section className={styles.ticketBookingInPut}>
         <InputSelect
            itemName="Movies"
            sd={{ m: 1, minWidth: 340 }}
            size="small"
         >
            {movies.map((c) => (
               <MenuItem key={c.maPhim} value={c.maPhim}>
                  {c.tenPhim}
               </MenuItem>
            ))}
         </InputSelect>
         <InputSelect
            itemName="Cinema"
            sd={{ m: 1, minWidth: 220 }}
            size="small"
         >
            {movieDetails.map((c) => (
               <MenuItem key={c.maHeThongRap} value={c.maHeThongRap}>
                  <img
                     src={c.logo}
                     alt={c.tenHeThongRap}
                     width="20"
                     style={{ marginRight: 6 }}
                  />
                  {c.tenHeThongRap}
               </MenuItem>
            ))}
         </InputSelect>
         <InputSelect
            itemName="Address"
            sd={{ m: 1, minWidth: 220 }}
            size="small"
         >
            {movieSchedule.cumRapChieu.map((c) => (
               <MenuItem key={c.maCumRap} value={c.maCumRap}>
                  {c.tenCumRap}
               </MenuItem>
            ))}
         </InputSelect>
         <InputSelect itemName="Time" sd={{ m: 1, minWidth: 200 }} size="small">
            {moveTimes.lichChieuPhim.map((c) => (
               <MenuItem key={c.maLichChieu} value={c.maLichChieu}>
                  {c.ngayChieuGioChieu}
               </MenuItem>
            ))}
         </InputSelect>
         <ButtonSVG />
      </section>
   );
};

export default TicketBookingInput;
