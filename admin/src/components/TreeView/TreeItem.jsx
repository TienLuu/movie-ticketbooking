import { useState } from "react";
import { Link, useHref } from "react-router-dom";
import PropTypes from "prop-types";
import classnames from "classnames/bind";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Collapse from "@mui/material/Collapse";

import TreeView from "./TreeView";

import styles from "./styles.module.scss";
const cn = classnames.bind(styles);

const TreeItem = ({ node }) => {
   const href = useHref();
   const [isExpanded, setExpanded] = useState(() => node.expanded || false);
   const hasChild = node.children ? true : false;

   let Component = "li";
   const { props = {} } = node;

   let componentClass = cn("item", {
      root: node.root,
      expanded: isExpanded,
      separate: node.separate,
      active: href === node.to,
   });

   if (node.to) {
      Component = Link;
      props.to = node.to;
   }

   return (
      <Component {...props} className={componentClass}>
         <div className={cn("title")} onClick={() => setExpanded(!isExpanded)}>
            {node.icon && <div className={cn("iconView")}>{node.icon}</div>}
            <span>{node.title}</span>
            {hasChild && (
               <div className={cn("iconToggle")}>
                  <KeyboardArrowDownIcon fontSize="inherit" color="inherit" />
               </div>
            )}
         </div>

         {hasChild && (
            <Collapse orientation="vertical" in={isExpanded}>
               <TreeView data={node.children} />
            </Collapse>
         )}
      </Component>
   );
};

TreeItem.propTypes = {
   node: PropTypes.object.isRequired,
};

export default TreeItem;
