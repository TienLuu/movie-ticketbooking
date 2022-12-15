import { memo, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import PropTypes from "prop-types";

import CustomNoRowsOverlay from "./CustomNoRowsOverlay";
import CustomLoadingOverlay from "./CustomLoadingOverlay";
import CustomErrorOverLay from "./CustomErrorOverLay";

import styles from "./styles.module.scss";

const TableData = ({ rows, columns, autoRowHeight, ...passProps }) => {
   const [pageSize, setPageSize] = useState(10);

   if (autoRowHeight) {
      passProps.getRowHeight = () => "auto";
   }

   return (
      <DataGrid
         getRowClassName={() => styles.row}
         getCellClassName={() => styles.cell}
         pageSize={pageSize}
         rowsPerPageOptions={[5, 10, 20]}
         onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
         pagination
         {...passProps}
         className={styles.table}
         rows={rows}
         columns={columns}
         disableSelectionOnClick
         disableColumnMenu={true}
         components={{
            NoRowsOverlay: CustomNoRowsOverlay,
            LoadingOverlay: CustomLoadingOverlay,
            ErrorOverlay: CustomErrorOverLay,
         }}
      />
   );
};

TableData.propTypes = {
   rows: PropTypes.array.isRequired,
   columns: PropTypes.array.isRequired,
};

export default memo(TableData);
