// Import Library's Hook
import { useState } from "react";

// Import Library's Component
import cn from "classnames";

// Import Module Css
import styles from "./styles.module.scss";

const SeatItem = ({
   seatInfo,
   lineName,
   seatsSelected,
   onSelectSeat,
   limitedNumber,
}) => {
   const [isSelected, setIsSelected] = useState(false);

   const handleSelectSeat = (seatId) => {
      // Check seat quantity and find seat index
      if (seatsSelected.length > 0 && seatsSelected.length === limitedNumber) {
         const index = seatsSelected.findIndex(
            (item) => item.maGhe === seatInfo.maGhe
         );

         // If exists => change isSelected state and remove from list of seat selected
         if (index !== -1) {
            onSelectSeat(seatId);
            setIsSelected(!isSelected);
            return;
         } else {
            alert(
               `The number of tickets booked isn't more than ${limitedNumber}!`
            );
            return;
         }
      }

      onSelectSeat(seatId);
      setIsSelected(!isSelected);
   };

   return (
      <>
         <div
            className={cn(
               { [styles.seat]: true },
               { [styles.active]: isSelected },
               { [styles.selected]: seatInfo?.daDat },
               { [styles.seatNormal]: seatInfo.loaiGhe === "Thuong" },
               { [styles.seatVip]: seatInfo.loaiGhe === "Vip" }
            )}
            onClick={() => handleSelectSeat(seatInfo.maGhe)}
         >
            {lineName}
         </div>
      </>
   );
};

export default SeatItem;
