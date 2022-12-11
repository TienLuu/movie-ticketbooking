import fetcher from "./fetcher";

const cinemaAPI = {
   getCinemaClusters: () => {
      return fetcher.get("QuanLyRap/LayThongTinHeThongRap");
   },

   getCinemaShowtimes: (cinemaClusterId) => {
      return fetcher.get("QuanLyRap/LayThongTinLichChieuHeThongRap", {
         params: {
            maHeThongRap: cinemaClusterId,
            maNhom: "GP09",
         },
      });
   },

   getMoviesShowtimes: (movieId) => {
      return fetcher.get("QuanLyRap/LayThongTinLichChieuPhim", {
         params: {
            MaPhim: movieId,
         },
      });
   },
};

export default cinemaAPI;
