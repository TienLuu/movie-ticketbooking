import fetcher from "./fetcher";

const movieAPI = {
   getBanner: async () => {
      return await fetcher.get("QuanLyPhim/LayDanhSachBanner");
   },

   getMovies: async () => {
      return await fetcher.get("QuanLyPhim/LayDanhSachPhim", {
         params: {
            maNhom: "GP09",
         },
      });
   },

   getMovieDetails: async (movieId) => {
      return await fetcher.get("QuanLyPhim/LayThongTinPhim", {
         params: {
            maPhim: movieId,
         },
      });
   },
};

export default movieAPI;
