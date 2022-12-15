import { useEffect } from "react";
import { Link, useLocation, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import RotateRightIcon from "@mui/icons-material/RotateRight";

import { Logo } from "../../components/SVG";
import TextField from "../../components/TextField";
import Button from "../../components/Button";

import { signin } from "../../slices/authSlice";
import styles from "./styles.module.scss";

const Login = () => {
   const dispatch = useDispatch();
   const { state } = useLocation();
   const { error, loading, user } = useSelector((state) => state.auth);

   const {
      register,
      handleSubmit,
      formState: { errors },
      setValue,
   } = useForm({
      defaultValues: { taiKhoan: "", matKhau: "" },
   });

   useEffect(() => {
      console.log(state);
      console.log(123);
      if (state) {
         for (const [key, value] of Object.entries(state)) {
            setValue(key, value);
         }
      }
   }, []);

   const onSubmit = (values) => {
      dispatch(signin(values));
   };

   const getRootAccount = () => {
      setValue(
         "taiKhoan",
         process.env?.REACT_APP_ADMIN_ACCOUNT || "tienluuadmin"
      );
      setValue(
         "matKhau",
         process.env?.REACT_APP_ADMIN_PASSWORD || "tienluuadmin@1301"
      );
   };

   if (user) {
      return <Navigate to="/admin" replace />;
   }

   return (
      <div className={styles.background}>
         <div className={styles.wrapper}>
            <div className={styles.logo}>
               <Logo width={50} height={50} />
               <h1>Welcome</h1>
            </div>
            <div className={styles.container}>
               <div className={styles.title}>
                  <h3>Login</h3>
               </div>
               <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                  <TextField
                     label="username"
                     {...register("taiKhoan", {
                        required: {
                           value: true,
                           message: "username is required",
                        },
                     })}
                     error={errors.taiKhoan && errors.taiKhoan.message}
                  />
                  <TextField
                     label="password"
                     {...register("matKhau", {
                        required: {
                           value: true,
                           message: "password is required",
                        },
                     })}
                     error={errors.matKhau && errors.matKhau.message}
                  />
                  <div className={styles.control}>
                     <div className={styles.remember}>
                        <input
                           type="checkbox"
                           name=""
                           id={styles.remember}
                           checked
                           readOnly
                        />
                        <label htmlFor={styles.remember}>Remember me</label>
                     </div>
                     <Link to="/forgot-password" className={styles.link}>
                        Forgot Password?
                     </Link>
                  </div>
                  {error && <p className={styles.errorMess}>{error}</p>}
                  <Button
                     solid
                     primary
                     large
                     disable={loading}
                     rightIcon={loading && <RotateRightIcon />}
                  >
                     Log in
                  </Button>
               </form>
            </div>
            <Button
               onClick={getRootAccount}
               solid
               small
               primary
               className={styles.clickMe}
            >
               Click me!!!!
            </Button>
         </div>
      </div>
   );
};

export default Login;
