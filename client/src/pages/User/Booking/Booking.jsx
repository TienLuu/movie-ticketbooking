// Import Library's Component
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import dayjs from "dayjs";

// Import Components
import Empty from "../../../layouts/Empty";

// Import Module Css
import styles from "./styles.module.scss";

const Booking = ({ user }) => {
   return (
      <div className={styles.bookingHistory}>
         <h1 className={styles.title}>Booking History</h1>
         <div className={styles.main}>
            <TableContainer component={Paper}>
               <Table
                  sx={{ minWidth: 1000 }}
                  size="small"
                  aria-label="a dense table"
               >
                  <TableHead>
                     <TableRow>
                        <TableCell>STT</TableCell>
                        <TableCell align="center">Tên Phim</TableCell>
                        <TableCell align="center">Thời lượng phim</TableCell>
                        <TableCell align="center">Tên rạp</TableCell>
                        <TableCell align="center">Ngày đặt</TableCell>
                        <TableCell align="center">Mã vé</TableCell>
                        <TableCell align="center">Tên ghế</TableCell>
                     </TableRow>
                  </TableHead>
                  <TableBody sx={{ minHeight: 300, height: "100%" }}>
                     {user?.thongTinDatVe ? (
                        user?.thongTinDatVe.map((row, index) => (
                           <TableRow
                              key={index}
                              sx={{
                                 "&:last-child td, &:last-child th": {
                                    border: 0,
                                 },
                              }}
                           >
                              <TableCell
                                 component="th"
                                 scope="row"
                                 align="center"
                              >
                                 {index + 1}
                              </TableCell>
                              <TableCell align="center">
                                 {row.tenPhim}
                              </TableCell>
                              <TableCell align="center">
                                 {row.thoiLuongPhim + " phút"}
                              </TableCell>
                              <TableCell align="center">
                                 {row.danhSachGhe
                                    .map((item) => item.tenRap)
                                    .slice(0, 1)}
                              </TableCell>
                              <TableCell align="center">
                                 {dayjs(row.ngayDat).format("DD/MM/YYYY")}
                              </TableCell>
                              <TableCell align="center">{row.maVe}</TableCell>
                              <TableCell align="center">
                                 {row.danhSachGhe.map(
                                    (item) => item.tenGhe + ", "
                                 )}
                              </TableCell>
                           </TableRow>
                        ))
                     ) : (
                        <Empty />
                     )}
                  </TableBody>
               </Table>
            </TableContainer>
         </div>
      </div>
   );
};

export default Booking;
