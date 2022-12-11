// Import Library's Component
import classnames from "classnames/bind";

// Import Custom Hook
import useBodyScroll from "../../hooks/useBodyScroll";

// Import Components
import { ButtonClose } from "../../components/SVG";

// Import Util
import getVideoId from "../../utils/EmbedVideo";

// Import Module Css
import styles from "./styles.module.scss";

const cn = classnames.bind(styles);

const ModalVideo = ({ isOpen, onClose, url, title, desc }) => {
   // Disable scroll
   useBodyScroll(isOpen);

   // Get embedID from youtube url
   const videoId = getVideoId(url);

   return (
      <>
         <div className={cn("popup", { active: isOpen })}>
            <div className={styles.modal}>
               <button className={styles.close} onClick={() => onClose()}>
                  <ButtonClose />
               </button>
               <div className={styles.body}>
                  <div className={styles.video}>
                     {isOpen ? (
                        <iframe
                           id="my-iframe-id"
                           width="100%"
                           height="100%"
                           src={`https://www.youtube.com/embed/${videoId}?autoplay=1&enablejsapi=1&widgetid=11`}
                           title="YouTube video player"
                           frameBorder="0"
                           allow="accelerometer;autoplay;clipboard-write; encrypted-media; gyroscope; picture-in-picture; muted"
                           allowFullScreen
                        ></iframe>
                     ) : (
                        ""
                     )}
                  </div>
                  <div className={styles.text}>
                     <h1>{title}</h1>
                     <span>- Khoa Học Viễn Tưởng, Phiêu Lưu, Hành Động</span>
                     <p>{desc}</p>
                  </div>
               </div>
               <div className={styles.footer}>
                  <button onClick={() => onClose()}>Đóng</button>
               </div>
            </div>
            <div className={styles.overlay}></div>
         </div>
      </>
   );
};

export default ModalVideo;
