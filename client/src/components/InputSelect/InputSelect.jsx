// Import Library's Component
import * as React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";

const InputSelect = ({ itemName, sd, children, size }) => {
   const [itemSelect, setItemSelect] = React.useState("");

   // Update value input
   const handleChange = (event) => {
      setItemSelect(event.target.value);
   };
   return (
      <>
         <FormControl sx={sd} size={size}>
            <InputLabel id="demo-select-small">{itemName}</InputLabel>
            <Select
               labelId="demo-select-small"
               id="demo-select-small"
               value={itemSelect}
               label={itemName}
               onChange={handleChange}
               sx={{ display: "flex", alignItems: "center" }}
            >
               {children}
            </Select>
         </FormControl>
      </>
   );
};

export default InputSelect;
