import fetcher from "./fetcher";

const movieAPI = {
   getBanners: () => {
      return fetcher.get("QuanLyPhim/LayDanhSachBanner");
   },

   getMovies: () => {
      return fetcher.get("QuanLyPhim/LayDanhSachPhim", {
         params: {
            maNhom: "GP09",
         },
      });
   },

   getMovieDetails: (movieId) => {
      return fetcher.get("QuanLyPhim/LayThongTinPhim", {
         params: {
            maPhim: movieId,
         },
      });
   },
};

export default movieAPI;
