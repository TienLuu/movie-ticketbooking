// Import Library's Hook
import { useEffect, useState } from "react";

const useRequest = (fn) => {
   const [data, setData] = useState();

   useEffect(() => {
      const fetchData = async () => {
         try {
            const data = await fn();
            setData(data);
         } catch (error) {
            console.log(error);
         }
      };

      fetchData();
   }, []);

   return { data, setData };
};

export default useRequest;
