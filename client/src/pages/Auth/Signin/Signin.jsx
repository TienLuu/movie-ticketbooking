import { useForm } from "react-hook-form";
import { Link, Navigate, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import swal from "sweetalert";

import TextField from "../../../components/TextField";

import { signin } from "../../../slices/authSlice";
import styles from "./styles.module.scss";

const Signin = () => {
   const [searchParams, setSearchParams] = useSearchParams();
   const { user } = useSelector((state) => state.auth);
   const dispatch = useDispatch();

   // Hanlde form
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({
      defaultValues: {
         taiKhoan: "",
         matKhau: "",
      },
      mode: "onTouched",
   });

   const onSubmit = (values) => {
      dispatch(signin(values))
         .unwrap()
         .then()
         .catch((error) => {
            // Check user account when sign in failed
            swal("Please check the information again!", "", "warning");
         });
   };

   // Navigate homepage or redicrectUrl when sign in success
   if (user) {
      const redirectUrl = searchParams.get("redirectUrl");
      return <Navigate to={redirectUrl || "/"} replace />;
   }

   return (
      <div className={styles.signin}>
         <div className={styles.signinLeft}>
            <div className={styles.title}>
               <h4>Sign in</h4>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
               <TextField
                  placeholder="Username"
                  {...register("taiKhoan", {
                     required: {
                        value: true,
                        message: "This field is required",
                     },
                  })}
                  error={errors.taiKhoan && errors.taiKhoan.message}
               />
               <TextField
                  placeholder="Password"
                  {...register("matKhau", {
                     required: {
                        value: true,
                        message: "This field is required",
                     },
                  })}
                  error={errors.matKhau && errors.matKhau.message}
               />
               <div className={styles.lookingFor}>
                  <p>
                     Forgot your password?
                     <Link to="/signup">
                        <span> Or Resigter</span>
                     </Link>
                  </p>
               </div>
               <button type="submit">sign in</button>
            </form>
         </div>
         <div className={styles.signinRight}>
            <div>
               <div className={styles.title}>
                  <h4>Hello, Friend!</h4>
               </div>
               <p className={styles.text}>
                  Enter your personal details and start journey with us
               </p>
               <Link to="/signup">
                  <button className={styles.btnNavigate}>sign Up</button>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default Signin;
