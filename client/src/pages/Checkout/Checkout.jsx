import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import SeatManagement from "./SeatManagement";
import Ticket from "./Ticket";
import Loading from "../../layouts/components/Loading";
import useRequest from "../../hooks/useRequest";

import ticketBookingAPI from "../../services/ticketBookingAPI";
import styles from "./styles.module.scss";

const Checkout = () => {
   const { checkoutId } = useParams();
   const [movieInfor, setMovieInfor] = useState();
   const [seats, setSeats] = useState();
   const [seatsSelected, setSeatsSelected] = useState([]);
   const getTicketRoom = useRequest(ticketBookingAPI.getTicketRoom, {
      manual: true,
   });

   const handleSelectSeat = (seatId) => {
      // Find seat is selected
      const seat = seats.find((item) => item.maGhe === seatId);

      // Return if seat is booked
      if (seat.daDat) {
         return;
      }

      // Check seat exists
      const newSeatsSelected = [...seatsSelected];
      const isExist = newSeatsSelected.findIndex(
         (item) => item.maGhe === seatId
      );
      if (isExist !== -1) {
         newSeatsSelected.splice(isExist, 1);
      } else {
         newSeatsSelected.push(seat);
      }

      setSeatsSelected(newSeatsSelected);
   };

   // Get seat list and movie information
   useEffect(() => {
      getTicketRoom
         .runAsync(checkoutId)
         .then((data) => {
            setSeats(data.danhSachGhe);
            setMovieInfor(data.thongTinPhim);
         })
         .catch((error) => {
            console.log(error);
         });
   }, [checkoutId]);

   if (!seats) {
      return <Loading />;
   }

   return (
      <section className={styles.checkout}>
         <div className={styles.main}>
            <SeatManagement
               seats={seats}
               onSelectSeat={handleSelectSeat}
               seatsSelected={seatsSelected}
            />
            <Ticket movieInfor={movieInfor} seatsSelected={seatsSelected} />
         </div>
      </section>
   );
};

export default Checkout;
