import fetcher from "./fetcher";

const ticketBookingAPI = {
   getTicketRoom: (showTimesId) => {
      return fetcher.get("QuanLyDatVe/LayDanhSachPhongVe", {
         params: {
            MaLichChieu: showTimesId,
         },
      });
   },

   bookingTicket: (inforTicket) => {
      return fetcher.post("/QuanLyDatVe/DatVe", inforTicket);
   },
};

export default ticketBookingAPI;
