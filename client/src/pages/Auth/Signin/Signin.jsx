// Import Library's Hook
import { useForm } from "react-hook-form";
import { Link, Navigate, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// Import Library's Component
import swal from "sweetalert";

// Import slice
import { signin, resetState } from "../../../slices/authSlice";

// Import Module Css
import styles from "./styles.module.scss";
import { useEffect } from "react";

const Signin = () => {
   const [searchParams, setSearchParams] = useSearchParams();
   const { user, error } = useSelector((state) => state.auth);
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

   // Check user account when sign in failed
   useEffect(() => {
      if (!user && error) {
         swal("Please check the information again!", "", "warning");
      }

      // Reset error state when sign in success
      return () => {
         dispatch(resetState());
      };
   }, [error]);

   const onSubmit = (values) => {
      dispatch(signin(values));
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
               <div>
                  <input
                     type="text"
                     placeholder="Username"
                     {...register("taiKhoan", {
                        required: {
                           value: true,
                           message: "This field is required",
                        },
                     })}
                  />
               </div>
               {errors.taiKhoan && (
                  <span className={styles.errorMess}>
                     {errors.taiKhoan.message}
                  </span>
               )}
               <div>
                  <input
                     type="text"
                     placeholder="Password"
                     {...register("matKhau", {
                        required: {
                           value: true,
                           message: "This field is required",
                        },
                     })}
                  />
               </div>
               {errors.matKhau && (
                  <span className={styles.errorMess}>
                     {errors.matKhau.message}
                  </span>
               )}
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
