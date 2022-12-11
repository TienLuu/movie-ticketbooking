import fetcher from "./fetcher";

const userAPI = {
   getUserInfor: () => {
      return fetcher.post("/QuanLyNguoiDung/ThongTinTaiKhoan");
   },

   updateUserInfor: (values) => {
      return fetcher.put("/QuanLyNguoiDung/CapNhatThongTinNguoiDung", {
         ...values,
         maNhom: "GP09",
      });
   },
};

export default userAPI;
