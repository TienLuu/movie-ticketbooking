import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import SideBar from "./SideBar";
import Brand from "./Brand";
import Navigate from "./Navigate";
import AccountMenu from "./AccountMenu";

import { theme } from "./header-config";
import styles from "./styles.module.scss";

const Header = () => {
   const NAV_ITEMS = ["HOME", "SHOWTIMES", "NEWS", "CONTACT"];

   return (
      <header className={styles.header}>
         <ThemeProvider theme={theme}>
            <Box sx={{ display: "flex" }}>
               <AppBar component="nav" color="primary">
                  <Container maxWidth="xl">
                     <Toolbar>
                        <SideBar navItems={NAV_ITEMS} />
                        <Brand />
                        <Navigate navItems={NAV_ITEMS} />
                        <Box sx={{ flexGrow: 1 }} />
                        <AccountMenu />
                     </Toolbar>
                  </Container>
               </AppBar>
            </Box>
         </ThemeProvider>
      </header>
   );
};

export default Header;
