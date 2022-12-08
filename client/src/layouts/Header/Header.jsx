// Import Library's Hook
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";

// Import Library's Component
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import AccountCircle from "@mui/icons-material/AccountCircle";

// Import Slice
import { logout } from "../../slices/authSlice";

// Import Module Css
import styles from "./styles.module.scss";
import { theme } from "../../utils/styles";

const navItems = ["HOME", "SHOWTIMES", "NEWS", "CONTACT"];

export default function PrimarySearchAppBar({ window }) {
   const [anchorEl, setAnchorEl] = useState(null);
   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
   const [mobileOpen, setMobileOpen] = useState(false);

   const { user } = useSelector((state) => state.auth);
   const dispatch = useDispatch();
   const isMenuOpen = Boolean(anchorEl);
   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

   // Get window
   const container =
      window !== undefined ? () => window().document.body : undefined;

   // Handle event click more icon
   const handleMobileMenuOpen = (event) => {
      setMobileMoreAnchorEl(event.currentTarget);
   };

   const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null);
   };

   //Handle event click user icon
   const handleProfileMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
   };

   const handleMenuClose = () => {
      setAnchorEl(null);
      handleMobileMenuClose();
   };

   const handleLogout = () => {
      dispatch(logout());
      handleMenuClose();
   };

   // Hanlde event click menu icon
   const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
   };

   // User info layout
   const menuId = "primary-search-account-menu";
   const renderMenu = (
      <Menu
         anchorEl={anchorEl}
         anchorOrigin={{
            vertical: "top",
            horizontal: "center",
         }}
         id={menuId}
         keepMounted
         transformOrigin={{
            vertical: "top",
            horizontal: "center",
         }}
         open={isMenuOpen}
         onClose={handleMenuClose}
      >
         <MenuItem onClick={handleMenuClose}>My account</MenuItem>
         <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
   );

   // Info user & location layout
   const mobileMenuId = "primary-search-account-menu-mobile";
   const renderMobileMenu = (
      <Menu
         anchorEl={mobileMoreAnchorEl}
         anchorOrigin={{
            vertical: "top",
            horizontal: "right",
         }}
         id={mobileMenuId}
         keepMounted
         transformOrigin={{
            vertical: "top",
            horizontal: "left",
         }}
         open={isMobileMenuOpen}
         onClose={handleMobileMenuClose}
      >
         {user ? (
            <MenuItem onClick={handleProfileMenuOpen}>
               <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="primary-search-account-menu"
                  aria-haspopup="true"
                  color="inherit"
                  className={styles.userIcon}
               >
                  <AccountCircle />
               </IconButton>
               <p>{user.hoTen.split(" ").slice(-2).join(" ")}</p>
            </MenuItem>
         ) : (
            <Link to="/signin" preventScrollReset={true}>
               <IconButton
                  size="large"
                  edge="end"
                  color="inherit"
                  className={styles.signin}
               >
                  <span>Sign in</span>
               </IconButton>
            </Link>
         )}
      </Menu>
   );

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
      <header>
         <ThemeProvider theme={theme}>
            <Box sx={{ display: "flex" }}>
               <AppBar component="nav" color="primary">
                  <Container maxWidth="xl">
                     <Toolbar>
                        {/* Toggle sidebar icon*/}
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

                        {/* Icon Brand */}
                        <Typography
                           variant="h6"
                           noWrap
                           component="div"
                           sx={{ display: { xs: "block" } }}
                           id={styles.navBrand}
                        >
                           <Link to="/">
                              <strong>watch</strong>trailer
                           </Link>
                        </Typography>

                        {/* Navigation item */}
                        <Box
                           sx={{ display: { xs: "none", md: "flex" } }}
                           className={styles.navList}
                        >
                           {navItems.map((item) => (
                              <Link to="/" preventScrollReset={true}>
                                 <Button
                                    key={item}
                                    sx={{ color: "#000", mr: 1 }}
                                    className={styles.navLink}
                                 >
                                    {item}
                                 </Button>
                              </Link>
                           ))}
                        </Box>

                        {/* User Icon */}
                        <Box sx={{ flexGrow: 1 }} />
                        {user ? (
                           <Box sx={{ display: { xs: "none", md: "flex" } }}>
                              <IconButton
                                 size="large"
                                 edge="end"
                                 aria-label="account of current user"
                                 aria-controls={menuId}
                                 aria-haspopup="true"
                                 onClick={handleProfileMenuOpen}
                                 color="inherit"
                                 className={styles.userIcon}
                              >
                                 <AccountCircle />
                                 <span>
                                    {user.hoTen.split(" ").slice(-2).join(" ")}
                                 </span>
                              </IconButton>
                           </Box>
                        ) : (
                           <Box sx={{ display: { xs: "none", md: "flex" } }}>
                              <Link to="/signin" preventScrollReset={true}>
                                 <IconButton
                                    size="large"
                                    edge="end"
                                    color="inherit"
                                    className={styles.signin}
                                 >
                                    <span>Sign in</span>
                                 </IconButton>
                              </Link>
                           </Box>
                        )}

                        {/* Toggle Info user*/}
                        <Box sx={{ display: { xs: "flex", md: "none" } }}>
                           <IconButton
                              size="large"
                              aria-label="show more"
                              aria-controls={mobileMenuId}
                              aria-haspopup="true"
                              onClick={handleMobileMenuOpen}
                              color="inherit"
                           >
                              <MoreIcon />
                           </IconButton>
                        </Box>
                     </Toolbar>
                  </Container>
               </AppBar>

               {/* Sidebar navigation */}
               <Box component="nav">
                  <Drawer
                     container={container}
                     variant="temporary"
                     open={mobileOpen}
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

               {renderMobileMenu}
               {renderMenu}
            </Box>
         </ThemeProvider>
      </header>
   );
}
