import { useForm } from "react-hook-form";
import { RegisterUser } from "../@types/types";
import patterns from "../validation/patterns";
import "./Register.scss";
import { DevTool } from "@hookform/devtools";
import { BsEye, BsEyeSlashFill } from "react-icons/bs";
import { useState } from "react";
import { registerMock } from "../mocks/register";
import auth from "../services/auth";
import dialogs from "../ui/dialogs";
import { useNavigate } from "react-router-dom";

// const Register = () => {
//   const navigate = useNavigate();
//   const {
//     register,
//     control,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<RegisterUser>({
//     defaultValues: registerMock,
//   });
//   const [showPassword, setShowPassword] = useState(false);

//   const onRegister = (data: RegisterUser) => {
//     auth
//       .register(data) //request
//       .then((res) => {
//         //201 response
//         localStorage.setItem("user_id", res.data._id);
//         dialogs.success("Success", "Register").then(() => {
//           navigate("/login");
//         });
//       })
//       .catch((e) => {
//         dialogs.error("Error", e.response.data);
//       });
//   };

//   return (
//     <div className="register-container">
//       <h2>Register</h2>
//       <form noValidate onSubmit={handleSubmit(onRegister)}>
//         {/* firstName */}
//         <section>
//           <input
//             placeholder="First Name"
//             type="text"
//             {...register("name.first", {
//               required: "This field is mandatory",
//               minLength: { value: 2, message: "Too short" },
//               maxLength: { value: 255, message: "Too long" },
//             })}
//           />
//           {errors.name?.last && (
//             <p className="text-red-500">{errors.name?.first?.message}</p>
//           )}
//         </section>

//         {/* middle */}
//         <section>
//           <input
//             placeholder="Middle Name"
//             type="text"
//             {...register("name.middle", {
//               minLength: { value: 2, message: "Too short" },
//               maxLength: { value: 255, message: "Too long" },
//             })}
//           />
//           {errors.name?.middle && (
//             <p className="text-red-500">{errors.name?.middle?.message}</p>
//           )}
//         </section>

//         {/* last */}
//         <section>
//           <input
//             placeholder="Last Name"
//             type="text"
//             {...register("name.last", {
//               required: "This field is mandatory",
//               minLength: { value: 2, message: "Too short" },
//               maxLength: { value: 255, message: "Too long" },
//             })}
//           />
//           {errors.name?.last && (
//             <p className="text-red-500">{errors.name?.last?.message}</p>
//           )}
//         </section>

//         {/* phone */}
//         <section>
//           <input
//             placeholder="Phone"
//             type="tel"
//             {...register("phone", {
//               required: "This field is mandatory",
//               minLength: { value: 9, message: "Too short" },
//               maxLength: { value: 14, message: "Too long" },
//             })}
//           />
//           {errors.phone && (
//             <p className="text-red-500">{errors.phone?.message}</p>
//           )}
//         </section>

//         {/* email */}
//         <section>
//           <input
//             placeholder="Email"
//             type="email"
//             {...register("email", {
//               required: "This field is mandatory",
//               pattern: {
//                 value: patterns.email,
//                 message: "Invalid email",
//               },
//             })}
//           />
//           {errors.email && (
//             <p className="text-red-500">{errors.email?.message}</p>
//           )}
//         </section>

//         {/* password */}
//         <section>
//           <div className="password-container">
//             <input
//               placeholder="Password"
//               type={showPassword ? `text` : `password`}
//               {...register("password", {
//                 required: "This field is mandatory",
//                 pattern: {
//                   value: patterns.password,
//                   message:
//                     "Password must be at least 9 characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*-",
//                 },
//               })}
//             />
//             <button
//               type="button"
//               onClick={() => {
//                 setShowPassword((s) => !s);
//               }}
//             >
//               {showPassword ? <BsEyeSlashFill /> : <BsEye />}
//             </button>
//           </div>
//           {errors.password && (
//             <p className="text-red-500">{errors.password?.message}</p>
//           )}
//         </section>

//         {/* image.url */}
//         <section>
//           <input
//             placeholder="Image URL"
//             type="url"
//             {...register("image.url", {
//               pattern: {
//                 value: patterns.url,
//                 message: "Invalid image URL",
//               },
//             })}
//           />
//           {errors.image?.url && (
//             <p className="text-red-500">{errors.image?.url?.message}</p>
//           )}
//         </section>

//         {/* image.alt */}
//         <section>
//           <input
//             placeholder="Image Description"
//             type="text"
//             {...register("image.alt", {
//               minLength: { value: 2, message: "Too short" },
//               maxLength: { value: 255, message: "Too long" },
//             })}
//           />
//           {errors.image?.alt && (
//             <p className="text-red-500">{errors.image?.alt?.message}</p>
//           )}
//         </section>

//         {/* address.state */}
//         <section>
//           <input
//             placeholder="State"
//             type="text"
//             {...register("address.state", {
//               minLength: { value: 2, message: "Too short" },
//               maxLength: { value: 255, message: "Too long" },
//             })}
//           />
//           {errors.address?.state && (
//             <p className="text-red-500">{errors.address?.state?.message}</p>
//           )}
//         </section>

//         {/* address.country */}
//         <section>
//           <input
//             placeholder="Country"
//             type="text"
//             {...register("address.country", {
//               required: "This field is mandatory",
//               minLength: { value: 2, message: "Too short" },
//               maxLength: { value: 255, message: "Too long" },
//             })}
//           />
//           {errors.address?.country && (
//             <p className="text-red-500">{errors.address?.country?.message}</p>
//           )}
//         </section>

//         {/* address.city */}
//         <section>
//           <input
//             placeholder="City"
//             type="text"
//             {...register("address.city", {
//               required: "This field is mandatory",
//               minLength: { value: 2, message: "Too short" },
//               maxLength: { value: 255, message: "Too long" },
//             })}
//           />
//           {errors.address?.city && (
//             <p className="text-red-500">{errors.address?.city?.message}</p>
//           )}
//         </section>

//         {/* address.street */}
//         <section>
//           <input
//             placeholder="Street"
//             type="text"
//             {...register("address.street", {
//               required: "This field is mandatory",
//               minLength: { value: 2, message: "Too short" },
//               maxLength: { value: 255, message: "Too long" },
//             })}
//           />
//           {errors.address?.street && (
//             <p className="text-red-500">{errors.address?.street?.message}</p>
//           )}
//         </section>

//         {/* address.houseNumber */}
//         <section>
//           <input
//             placeholder="House Number"
//             type="number"
//             {...register("address.houseNumber", {
//               required: "This field is mandatory",
//               min: { value: 2, message: "Too small" },
//               max: { value: 256, message: "Too big" },
//             })}
//           />
//           {errors.address?.houseNumber && (
//             <p className="text-red-500">
//               {errors.address?.houseNumber?.message}
//             </p>
//           )}
//         </section>

//         {/* address.zip */}
//         <section>
//           <input
//             placeholder="Zip"
//             type="number"
//             {...register("address.zip", {
//               required: "This field is mandatory",
//               min: { value: 2, message: "Too small" },
//               max: { value: 256, message: "Too big" },
//             })}
//           />
//           {errors.address?.zip && (
//             <p className="text-red-500">{errors.address?.zip?.message}</p>
//           )}
//         </section>

//         {/* isBusiness */}
//         <section className="checkbox-container">
//           <label htmlFor="isBusiness">Business</label>
//           <input id="isBusiness" type="checkbox" {...register("isBusiness")} />
//           {errors.isBusiness && (
//             <p className="text-red-500">{errors.isBusiness?.message}</p>
//           )}
//         </section>
//         <button type="submit">Register</button>
//       </form>
//       {/* <DevTool control={control} /> */}
//     </div>
//   );
// };

// export default Register;


import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState({ first: "", last: "" });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterUser>({
    defaultValues: registerMock,
  });
  const [showPassword, setShowPassword] = useState(false);

  const onRegister = (data: RegisterUser) => {
    data.name.first = name.first;
    console.log(data);
    auth
      .register(data) //request
      .then((res) => {
        //201 response
        localStorage.setItem("token", res.data._id);
        dialogs.success("Success", "Register").then(() => {
          navigate("/login");
        });
      })
      .catch((e) => {
        dialogs.error("Error", e.response.data);
      });
  };

  const handleRegister = async () => { };

  return (
    <form noValidate onSubmit={handleSubmit(onRegister)}>
      <Container maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            mt: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.light" }}>
            <LockOutlined />
          </Avatar>
          <Typography variant="h5">Register</Typography>
          <Box sx={{ mt: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="firstName"
                    autoFocus
                    value={name.first}
                    onChange={(e) => setName({ ...name, first: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="lastName"
                    required
                    fullWidth
                    id="lastName"
                    label="lastName"
                    autoFocus
                    value={name.last}
                    onChange={(e) => setName({ ...name, last: e.target.value })}
                  />
                </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <section className="checkbox-container">
                  <label htmlFor="isBusiness">Business</label>
                  <input id="isBusiness" type="checkbox" {...register("isBusiness")} />
                  {errors.isBusiness && (
                    <p className="text-red-500">{errors.isBusiness?.message}</p>
                  )}
                </section>
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleRegister}
              type="submit"
            >
              Register
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login">Already have an account? Login</Link>
              </Grid>
            </Grid>
            <DevTool control={control} />
          </Box>
        </Box>
      </Container>
    </form>
  );
};

export default Register;