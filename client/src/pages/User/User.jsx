// Import Library's Hook
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Import Library's Component
import classnames from "classnames/bind";

// Import Components
import UserInfor from "./UserInfor";
import Booking from "./Booking";
import Loading from "../../layouts/Loading";

// Import Services
import { getUserInfor } from "../../slices/userSlice";

// Import Module Css
import styles from "./styles.module.scss";

const cn = classnames.bind(styles);

const User = () => {
   const { user } = useSelector((state) => state.user);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getUserInfor());
   }, []);

   if (!user) {
      return <Loading />;
   }
   console.log(user);

   const { thongTinDatVe, taiKhoan, hoTen, maLoaiNguoiDung, loaiNguoiDung } =
      user;

   const ticketsNum = thongTinDatVe.reduce((total, item) => {
      return total + item.danhSachGhe.length;
   }, 0);

   return (
      <div className={styles.user}>
         <div className={styles.main}>
            <div className={styles.userInfor}>
               <p className={styles.image}>
                  {taiKhoan.slice(0, 1).toUpperCase()}
               </p>
               <p className={styles.name}>{hoTen}</p>
               <p
                  className={cn("users-type", {
                     quanTri: maLoaiNguoiDung === "QuanTri",
                  })}
               >
                  {loaiNguoiDung.tenLoai}
               </p>
               <div className={styles.bookingInfor}>
                  <p>
                     Số lần đặt vé:{" "}
                     <strong className={styles.amount}>
                        {thongTinDatVe.length}
                     </strong>
                  </p>
                  <p>
                     Số vé đã đặt:{" "}
                     <strong className={styles.amount}>{ticketsNum}</strong>
                  </p>
               </div>
            </div>

            <div className={styles.userDetails}>
               <div className={styles.persionalInfor}>
                  <UserInfor user={user} />
               </div>

               <div className={styles.bookingHistory}>
                  <Booking user={user} />
               </div>
            </div>
         </div>
      </div>
   );
};

export default User;
