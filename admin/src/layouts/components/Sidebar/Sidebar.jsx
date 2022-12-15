import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import TreeView from "../../../components/TreeView";
import useToggle from "../../../hooks/useToggle";

import styles from "./styles.module.scss";
import sidebarConfig from "./sidebar-config";
const cn = classNames.bind(styles);

const Sidebar = () => {
   const [isExpand, toggleIsExpand] = useToggle(false);

   return (
      <div className={cn("wrapper", { expand: isExpand })}>
         <Link to="/admin" className={styles.logoWrapper}>
            <p>
               <strong>WATCH</strong>TRAILER
            </p>
         </Link>
         <div
            className={cn("sidebarToggleBtn", {
               active: isExpand,
            })}
            onClick={toggleIsExpand}
         />
         <div className={styles.menu}>
            <TreeView data={sidebarConfig} />
         </div>
      </div>
   );
};

export default Sidebar;
