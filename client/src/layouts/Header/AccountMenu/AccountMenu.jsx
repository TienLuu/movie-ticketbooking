// Import Library's Hook
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

// Import Library's Component
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MoreIcon from "@mui/icons-material/MoreVert";
import AccountCircle from "@mui/icons-material/AccountCircle";

// Import Slice
import { logout } from "../../../slices/authSlice";

// Import Module Css
import styles from "./styles.module.scss";

const AccountMenu = () => {
   const [anchorEl, setAnchorEl] = useState(null);
   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
   const { user } = useSelector((state) => state.auth);
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const isMenuOpen = Boolean(anchorEl);
   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

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

   const handleSignin = () => {
      handleMenuClose();
      return navigate("/user");
   };

   const handleLogout = () => {
      dispatch(logout());
      handleMenuClose();
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
         <MenuItem onClick={handleSignin}>My account</MenuItem>
         <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
   );

   // Info user
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
                  <span>{user.hoTen.split(" ").slice(-2).join(" ")}</span>
               </IconButton>
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

   return (
      <>
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
                  <span>{user.hoTen.split(" ").slice(-2).join(" ")}</span>
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

         {renderMobileMenu}
         {renderMenu}
      </>
   );
};

export default AccountMenu;
