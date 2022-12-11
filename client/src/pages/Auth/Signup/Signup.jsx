// Import Library's Hook
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

// Import Library's Component
import swal from "sweetalert";

// Import Custom Hook
import useRequest from "../../../hooks/useRequest";

// Import Components
import TextField from "../../../components/TextField";

// Import Services
import authAPI from "../../../services/authAPI";

// Import Module Css
import styles from "./styles.module.scss";

const Signup = () => {
   const createUser = useRequest(authAPI.signup, { manual: true });
   const navigate = useNavigate();

   // Hanlde form
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({
      defaultValues: {
         hoTen: "",
         taiKhoan: "",
         matKhau: "",
         email: "",
         soDt: "",
         terms: "",
      },
      mode: "onTouched",
   });

   const onSubmit = (values) => {
      // Filter user information
      const { terms, ...newValues } = values;

      // Show message of the sign up status
      createUser
         .runAsync(newValues)
         .then(() => {
            swal("Sign Up Success!", "", "success").then(() =>
               navigate("/signin")
            );
         })
         .catch((error) => {
            swal(`${error}!`, "", "warning");
         });
   };

   return (
      <>
         <div className={styles.signup}>
            <div className={styles.signupLeft}>
               <div className={styles.title}>
                  <h4>Sign up</h4>
               </div>
               <form onSubmit={handleSubmit(onSubmit)}>
                  <TextField
                     placeholder="Full Name"
                     {...register("hoTen", {
                        required: {
                           value: true,
                           message: "Please enter your fullname",
                        },
                        maxLength: {
                           value: 100,
                           message: "Please change your name",
                        },
                     })}
                     error={errors.hoTen && errors.hoTen.message}
                  />
                  <TextField
                     placeholder="Username"
                     {...register("taiKhoan", {
                        required: {
                           value: true,
                           message: "Please enter your username",
                        },
                        minLength: {
                           value: 5,
                           message: "Username is limited 5 - 20 characters",
                        },
                        maxLength: {
                           value: 20,
                           message: "Username is limited 5 - 20 characters",
                        },
                     })}
                     error={errors.taiKhoan && errors.taiKhoan.message}
                  />
                  <TextField
                     placeholder="Password"
                     {...register("matKhau", {
                        required: {
                           value: true,
                           message: "Please enter your password",
                        },
                        minLength: {
                           value: 5,
                           message: "Password is limited 8 - 20 characters",
                        },
                        maxLength: {
                           value: 20,
                           message: "Password is limited 8 - 20 characters",
                        },
                        pattern: {
                           value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g,
                           message:
                              "Password must be at least one uppercase letter, lowercase letter, digit, special character",
                        },
                     })}
                     error={errors.matKhau && errors.matKhau.message}
                  />
                  <TextField
                     placeholder="Email"
                     {...register("email", {
                        required: {
                           value: true,
                           message: "Please enter your email",
                        },
                        pattern: {
                           value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                           message:
                              "Please enter your email address in format: yourname@example.com",
                        },
                     })}
                     error={errors.email && errors.email.message}
                  />
                  <TextField
                     placeholder="Phone Number"
                     {...register("soDt", {
                        required: {
                           value: true,
                           message: "Please enter your phone number",
                        },
                        pattern: {
                           value: /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
                           message:
                              "Please enter your phone in format: 840901234567 || 0901234567",
                        },
                     })}
                     error={errors.soDt && errors.soDt.message}
                  />
                  <div className={styles.checkboxTerms}>
                     <input
                        type="checkbox"
                        name="terms"
                        id="terms"
                        {...register("terms", {
                           required: {
                              value: true,
                              message: "Please accept the terms to proceed",
                           },
                        })}
                     />{" "}
                     <label htmlFor="terms">
                        I agree to the terms of services
                     </label>
                  </div>
                  {errors.terms && (
                     <span
                        className={`${styles.errorMess} ${styles.checkboxError}`}
                     >
                        {errors.terms.message}
                     </span>
                  )}
                  <button>sign up</button>
               </form>
            </div>
            <div className={styles.signupRight}>
               <div>
                  <div className={styles.title}>
                     <h4>Welcome Back!</h4>
                  </div>
                  <p className={styles.text}>
                     To keep connected with us please login with your personal
                     info
                  </p>
                  <Link to="/signin">
                     <button className={styles.btnNavigate}>sign in</button>
                  </Link>
               </div>
            </div>
         </div>
      </>
   );
};

export default Signup;
