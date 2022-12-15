import { memo } from "react";
import PropTypes from "prop-types";
import classnames from "classnames/bind";

import TreeItem from "./TreeItem";
import styles from "./styles.module.scss";
const cn = classnames.bind(styles);

const TreeView = ({ data = [], visible = true, children }) => {
   return (
      <ul className={cn("list", { visible })}>
         {data.map((node, index) => (
            <TreeItem node={node} key={index} />
         ))}
         {children}
      </ul>
   );
};

TreeView.propTypes = {
   data: PropTypes.array.isRequired,
   children: PropTypes.node,
   visible: PropTypes.bool,
};

export default memo(TreeView);
