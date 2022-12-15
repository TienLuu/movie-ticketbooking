import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import useToggle from "../../../../hooks/useToggle";
import styles from "./styles.module.scss";

const SideBar = ({ navItems, window }) => {
   const [value, toggleValue] = useToggle(false);

   // Get window
   const container =
      window !== undefined ? () => window().document.body : undefined;

   // Hanlde event click menu icon
   const handleDrawerToggle = () => {
      toggleValue(!value);
   };

   // Sidebar layout
   const drawer = (
      <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
         <Typography variant="h6" sx={{ my: 2 }} id={styles.navBrand}>
            <strong>watch</strong>trailer
         </Typography>
         <Divider />
         <List>
            {navItems.map((item) => (
               <Link key={item} to="/">
                  <ListItem disablePadding>
                     <ListItemButton sx={{ textAlign: "center" }}>
                        <ListItemText primary={item} />
                     </ListItemButton>
                  </ListItem>
               </Link>
            ))}
         </List>
      </Box>
   );

   return (
      <>
         {/* Toggle sidebar icon*/}
         <Box>
            <IconButton
               size="large"
               edge="start"
               color="inherit"
               aria-label="open drawer"
               sx={{ mr: 2, display: { md: "none" } }}
               onClick={handleDrawerToggle}
               className={styles.navButtonMore}
            >
               <MenuIcon />
            </IconButton>
         </Box>

         {/* Sidebar navigation */}
         <Box component="nav">
            <Drawer
               container={container}
               variant="temporary"
               open={value}
               onClose={handleDrawerToggle}
               ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
               }}
               sx={{
                  display: { xs: "block", md: "none" },
                  "& .MuiDrawer-paper": {
                     boxSizing: "border-box",
                     width: 240,
                  },
               }}
            >
               {drawer}
            </Drawer>
         </Box>
      </>
   );
};

export default SideBar;
