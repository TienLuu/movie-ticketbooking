import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import swal from "sweetalert";

import useRequest from "../../../hooks/useRequest";
import TextField from "../../../components/TextField";

import userAPI from "../../../services/userAPI";
import { getUserInfor } from "../../../slices/userSlice";
import styles from "./styles.module.scss";

const UserInfor = ({ user }) => {
   const dispatch = useDispatch();
   const updateUserInfor = useRequest(userAPI.updateUserInfor, {
      manual: true,
   });

   useEffect(() => {
      reset({
         taiKhoan: user?.taiKhoan,
         matKhau: user?.matKhau,
         email: user?.email,
         soDt: user?.soDT,
         hoTen: user?.hoTen,
         maLoaiNguoiDung: user?.maLoaiNguoiDung,
      });
   }, [user]);

   const { reset, control, handleSubmit } = useForm({
      defaultValues: {
         taiKhoan: "",
         matKhau: "",
         email: "",
         soDt: "",
         hoTen: "",
         maLoaiNguoiDung: "",
      },
      mode: "onTouched",
   });

   const onSubmit = (values) => {
      updateUserInfor
         .runAsync(values)
         .then(async () => {
            await dispatch(getUserInfor()).unwrap();
            await swal("Update successful", "You clicked the 'OK'!", "success");
         })
         .catch((error) => {
            swal("Update failed", `${error}`, "warning");
         });
   };

   return (
      <div className={styles.wrapper}>
         <h1 className={styles.title}> Persional Information</h1>
         <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.container}>
               <Controller
                  name="taiKhoan"
                  control={control}
                  rules={{
                     required: {
                        value: true,
                        message: "Please enter your username",
                     },
                  }}
                  render={({ field, fieldState: { error } }) => (
                     <TextField
                        {...field}
                        label="Username"
                        error={error?.message}
                        disabled
                     />
                  )}
               />
               <Controller
                  name="matKhau"
                  control={control}
                  rules={{
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
                  }}
                  render={({ field, fieldState: { error } }) => (
                     <TextField
                        {...field}
                        label="Password"
                        error={error?.message}
                     />
                  )}
               />
               <Controller
                  name="email"
                  control={control}
                  rules={{
                     required: {
                        value: true,
                        message: "Please enter your email",
                     },
                     pattern: {
                        value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                        message:
                           "Please enter your email address in format: yourname@example.com",
                     },
                  }}
                  render={({ field, fieldState: { error } }) => (
                     <TextField
                        {...field}
                        label="Email"
                        error={error?.message}
                     />
                  )}
               />
               <Controller
                  name="hoTen"
                  control={control}
                  rules={{
                     required: {
                        value: true,
                        message: "Please enter your fullname",
                     },
                  }}
                  render={({ field, fieldState: { error } }) => (
                     <TextField
                        {...field}
                        label="Full Name"
                        error={error?.message}
                     />
                  )}
               />
               <Controller
                  name="soDt"
                  control={control}
                  rules={{
                     required: {
                        value: true,
                        message: "Please enter your phone number",
                     },
                     pattern: {
                        value: /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
                        message:
                           "Please enter your phone in format: 840901234567 || 0901234567",
                     },
                  }}
                  render={({ field, fieldState: { error } }) => (
                     <TextField
                        {...field}
                        label="Phone Number"
                        error={error?.message}
                     />
                  )}
               />
            </div>
            <button>Update</button>
         </form>
      </div>
   );
};

export default UserInfor;
