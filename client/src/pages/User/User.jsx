import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classnames from "classnames/bind";

import UserInfor from "./UserInfor";
import Booking from "./Booking";
import Loading from "../../layouts/components/Loading";

import { getUserInfor } from "../../slices/userSlice";
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
                  className={cn("type", {
                     quanTri: maLoaiNguoiDung === "QuanTri",
                  })}
               >
                  {loaiNguoiDung.tenLoai}
               </p>
               <div className={styles.bookingInfor}>
                  <p>
                     Amount of ticket booking:{" "}
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
