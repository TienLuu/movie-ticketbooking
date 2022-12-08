import fetcher from "./fetcher";

const ticketBookingAPI = {
   getTicketRoom: async (showTimesId) => {
      return await fetcher.get("QuanLyDatVe/LayDanhSachPhongVe", {
         params: {
            MaLichChieu: showTimesId,
         },
      });
   },
};

export default ticketBookingAPI;
