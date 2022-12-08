// Import Library's Hook
import { useEffect } from "react";

const useBodyScroll = (isDeactivate) => {
   useEffect(() => {
      if (isDeactivate) {
         document.body.style.overflow = "hidden";
      }
      return () => (document.body.style.overflow = "scroll");
   }, [isDeactivate]);
};

export default useBodyScroll;
