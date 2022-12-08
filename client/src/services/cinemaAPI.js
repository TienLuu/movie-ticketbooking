import fetcher from "./fetcher";

const cinemaAPI = {
   getCinemaClusters: async () => {
      return await fetcher.get("QuanLyRap/LayThongTinHeThongRap");
   },

   getMovieTheaterAddressList: async () => {
      return await fetcher.get("QuanLyRap/LayThongTinCumRapTheoHeThong");
   },

   getMovieTheaterAddress: async (cinemaBranchId) => {
      return await fetcher.get("QuanLyRap/LayThongTinCumRapTheoHeThong", {
         params: {
            maHeThongRap: cinemaBranchId,
         },
      });
   },

   getCinemaShowtimes: async (cinemaClusterId) => {
      return await fetcher.get("QuanLyRap/LayThongTinLichChieuHeThongRap", {
         params: {
            maHeThongRap: cinemaClusterId,
            maNhom: "GP09",
         },
      });
   },

   getMoviesShowtimes: async (movieId) => {
      return await fetcher.get("QuanLyRap/LayThongTinLichChieuPhim", {
         params: {
            MaPhim: movieId,
         },
      });
   },
};

export default cinemaAPI;
