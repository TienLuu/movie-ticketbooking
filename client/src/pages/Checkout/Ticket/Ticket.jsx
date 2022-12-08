// Import Library's Hook
import { useNavigate } from "react-router-dom";

// Import Library's Component
import swal from "sweetalert";

// Import Module Css
import styles from "./styles.module.scss";

const Ticket = ({ movieInfor, seatsSelected }) => {
   const navigate = useNavigate();

   // Check the list of seats selected before purchase
   const handlePurchase = () => {
      if (!seatsSelected.length) {
         alert("Please choose your seat before payment!");
         return;
      }
      swal("Payment Success!", "You clicked the button!", "success").then(() =>
         navigate("/")
      );
   };

   return (
      <div className={styles.ticket}>
         <h3>Ticket</h3>
         <div className={styles.main}>
            <div className={styles.details}>
               <div className={styles.cinemaName}>
                  <span>Cinema: </span>
                  <span>{movieInfor.tenCumRap}</span>
               </div>
               <div className={styles.movieName}>
                  <span>Movie: </span>
                  <span>{movieInfor.tenPhim}</span>
               </div>
               <div className={styles.showTime}>
                  <span>ShowTime: </span>
                  <span>
                     {movieInfor.ngayChieu + " - " + movieInfor.gioChieu}
                  </span>
               </div>
               <div className={styles.room}>
                  <span>Room: </span>
                  <span>{movieInfor.tenRap}</span>
               </div>
               <div className={styles.seatNumber}>
                  <span>Seats: </span>
                  <span>
                     {seatsSelected
                        .map((item) => `Seat ${item.tenGhe}`)
                        .join(", ")}
                  </span>
               </div>
            </div>
         </div>
         <div className={styles.purchase}>
            <div className={styles.totalPrice}>
               <span>Total Price: </span>
               <span>
                  {seatsSelected
                     .reduce((total, item) => {
                        return total + item.giaVe;
                     }, 0)
                     .toLocaleString("it-IT", {
                        style: "currency",
                        currency: "VND",
                     })}
               </span>
            </div>
            <div className={styles.btnPurchase}>
               <button onClick={handlePurchase}>Purchase</button>
            </div>
         </div>
      </div>
   );
};

export default Ticket;
