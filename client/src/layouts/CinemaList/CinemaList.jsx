// Import Component
import CinemaItem from "./CinemeItem";

// Import Module Css
import styles from "./styles.module.scss";

const CinemaList = ({
   cinemaCluster,
   onSelectCinemaBranch,
   onSelect,
   cinemaBranchId,
}) => {
   const handleSelectCinema = (cinemaBranchId) => {
      onSelect();
      onSelectCinemaBranch(cinemaBranchId);
   };

   return (
      <>
         <div className={styles.cinemaList}>
            <div className={styles.inputSearch}>
               <input type="text" placeholder="Tìm tên theo rạp ..." />
            </div>
            {!cinemaCluster
               ? ""
               : cinemaCluster.lstCumRap.map((item) => (
                    <CinemaItem
                       key={item.maCumRap}
                       cinemaBranch={item}
                       logo={cinemaCluster.logo}
                       onSelect={handleSelectCinema}
                       isActive={item.maCumRap === cinemaBranchId}
                    />
                 ))}
         </div>
      </>
   );
};

export default CinemaList;
