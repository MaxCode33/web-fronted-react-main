import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { LoginUser } from "../@types/types";
import { useAuth } from "../hooks/useAuth";
import auth from "../services/auth";
import dialogs, { showSuccessDialog } from "../ui/dialogs";
import patterns from "../validation/patterns";

// const Login = () => {
//   const navigate = useNavigate();
//   const { login } = useAuth();

//   const onLogin = (data: LoginUser) => {
//     auth
//       .login(data)
//       .then((res) => {
//         showSuccessDialog("Login", "Logged in").then(() => {
//           login(res.data);
//           // send the user to home page
//           navigate("/");
//         });
//       })
//       .catch((e) => {
//         dialogs.error("Login Error", e.response.data);
//       });
//   };

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<LoginUser>();

//   return (
//     <div>
//       <h2>Login Page</h2>
//       <form noValidate onSubmit={handleSubmit(onLogin)}>
//         {/* email */}
//         <section>
//           <input
//             placeholder="Email"
//             autoCapitalize="true"
//             autoCorrect="false"
//             autoComplete="email"
//             type="email"
//             {...register("email", {
//               required: "This field is mandatory",
//               pattern: patterns.email,
//             })}
//           />
//           {errors.email && <p>{errors.email?.message}</p>}
//         </section>

//         {/* password */}
//         <section>
//           <input
//             autoComplete="current-password"
//             placeholder="Password"
//             type="password"
//             {...register("password", {
//               required: "This field is mandatory",
//               pattern: patterns.password,
//             })}
//           />
//           {errors.password && <p>{errors.password?.message}</p>}
//         </section>

//         <button>Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;

import { LockOutlined } from "@mui/icons-material";
import {
  Container,
  CssBaseline,
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const onLogin = (data: LoginUser) => {
    auth
      .login(data)
      .then((res) => {
        showSuccessDialog("Login", "Logged in").then(() => {
          login(res.data);
          // send the user to home page
          navigate("/");
        });
      })
      .catch((e) => {
        dialogs.error("Login Error", e.response.data);
      });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUser>();

  const handleLogin = () => { };

  return (
    <>
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
          <Typography variant="h5">Login</Typography>
          <Box sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleLogin}
            >
              Login
            </Button>
            <Grid container justifyContent={"flex-end"}>
              <Grid item>
                <Link to="/register">Don't have an account? Register</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Login;