// Import Components
import SeatItem from "../SeatItem";

// Import Module Css
import styles from "./styles.module.scss";

const SeatManagement = ({ seats, onSelectSeat, seatsSelected }) => {
   const newSeats = [];
   const LIMITEDNUMBER_SEAT = 6;

   // Format seats list to 10 column
   const fomarttedSeats = () => {
      let flag = 0;
      let limitCol = 16;
      for (let lineIndex = 0; lineIndex < 10; lineIndex++) {
         let line = [];
         for (let colIndex = flag; colIndex < seats.length; colIndex++) {
            if (colIndex < limitCol) {
               line.push(seats[colIndex]);
               flag = flag + 1;
            } else {
               limitCol = limitCol + 16;
               break;
            }
         }
         newSeats.push(line);
      }
   };

   fomarttedSeats(seats);

   // Intermediate processing
   const handleSelectSeatTransit = (seatId) => {
      onSelectSeat(seatId);
   };

   return (
      <>
         <div className={styles.seatChoice}>
            <h1>CHOOSE SEAT</h1>
            <div className={styles.typeChose}>
               <span className={styles.seatSelected}>Selected Seat</span>
               <span className={styles.seatReserved}>Reserved Seat</span>
               <span className={styles.seatNormal}>Normal Seat</span>
               <span className={styles.seatVip}>Vip Seat</span>
            </div>
            <div className={styles.screen}>
               <div className={styles.screenLight}></div>
            </div>
            <div className={styles.seatList}>
               <div className={styles.wrapper}>
                  {newSeats.map((line, indexLine) => (
                     <div key={indexLine} className={styles.seatLine}>
                        {line.map((seat) => (
                           <SeatItem
                              key={seat.maGhe}
                              seatInfo={seat}
                              lineName={seat.tenGhe}
                              seatsSelected={seatsSelected}
                              limitedNumber={LIMITEDNUMBER_SEAT}
                              onSelectSeat={handleSelectSeatTransit}
                           />
                        ))}
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </>
   );
};

export default SeatManagement;
