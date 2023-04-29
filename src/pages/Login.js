import {
  Box,
  Button,
  Divider,
  Stack,
  useTheme,
  Typography,
  TextField,
  IconButton,
  Link,
  InputAdornment,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import { Form, useFormik, FormikProvider } from "formik";
import * as Yup from "yup";
import { tokens } from "../theme";
import { motion } from "framer-motion";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const easing = [0.6, -0.05, 0.01, 0.99];
const fadeInUp = {
  initial: {
    y: 40,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};
const Login = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [showPassword, setShowPassword] = useState(false);
  const loginSchema = Yup.object({
    email: Yup.string()
      .email("Enter valid email address!")
      .required("Email is required!"),
    password: Yup.string().required("Password is required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;
  return (
    <FormikProvider value={formik}>
      <Box
        component={motion.div}
        {...fadeInUp}
        sx={{
          margin: " 30px  auto",
          minWidth: "50%",
          maxWidth: "90%",
          height: "500px",
          padding: "20px",
          borderRadius: "10px",
          mt: 10,
          backgroundColor: colors.primary[400],
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flex: 1,
          }}
        >
          <AccountCircleOutlinedIcon sx={{ fontSize: 50, margin: "0 auto" }} />
          <Box>
            <Divider
              variant=""
              color="red"
              sx={{ my: 3 }}
              component={motion.div}
              {...fadeInUp}
            >
              <Typography variant="h3" sx={{ color: "text.secondary" }}>
                Login
              </Typography>
            </Divider>
          </Box>
        </Box>
        <Form onSubmit={handleSubmit}>
          <Box display="flex" flexDirection="column" flex="1">
            <Box
              sx={{
                width: { sm: "100%", md: "90%", lg: "90%" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <TextField
                type="email"
                variant="outlined"
                sx={{
                  p: "10px",
                  width: { sm: "100%", md: "90%", lg: "90%" },
                  margin: { sm: "0 0", md: "0 5%" },
                }}
                placeholder="Email "
                {...getFieldProps("email")}
              />
              {touched.email && errors.email && (
                <Box
                  component="p"
                  sx={{
                    my: 0,
                    textAlign: "center",
                    color: colors.redAccent[500],
                  }}
                >
                  {errors.email}
                </Box>
              )}
            </Box>
            <Box
              sx={{
                width: { sm: "100%", md: "90%", lg: "90%" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <TextField
                name="password"
                variant="outlined"
                sx={{
                  p: "10px",
                  width: { sm: "100%", md: "90%", lg: "90%" },
                  margin: { sm: "0 0", md: "0 5%" },
                }}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                {...getFieldProps("password")}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword((prev) => !prev)}
                        edge="end"
                        aria-label="toggle password visibility"
                      >
                        {showPassword ? (
                          <Visibility color="red" />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              {touched.password && errors.password && (
                <Box
                  component="p"
                  sx={{
                    my: 0,
                    textAlign: "center",
                    color: colors.redAccent[500],
                  }}
                >
                  {errors.password}
                </Box>
              )}
            </Box>
            <Box
              sx={{
                width: { sm: "90%", md: "20%", lg: "20%" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                margin: { sm: "0 2%", md: "0  auto", lg: "0  auto" },
              }}
            >
              <Button
                sx={{
                  backgroundColor: colors.grey[100],
                  width: { sm: "90%", md: "90%", lg: "90%" },
                  color: colors.primary[700],
                  fontSize: "1.1rem",

                  "&: hover": {
                    backgroundColor: colors.grey[200],
                  },
                }}
              >
                Login
              </Button>
            </Box>
          </Box>
        </Form>
        <Divider sx={{ mt: 4 }}>
          <Box>
            <Typography
              component={motion.p}
              {...fadeInUp}
              variant="h4"
              sx={{
                color: colors.blueAccent[300],
              }}
            >
              Haven't an account?{" "}
              <Link
                variant="h4"
                sx={{
                  color: colors.grey[300],
                  padding: 2,
                  textDecoration: "underline",
                  "&:hover": { color: colors.grey[200] },
                }}
                component={RouterLink}
                to="/signup"
              >
                Create new account
              </Link>
            </Typography>
          </Box>
        </Divider>
      </Box>
    </FormikProvider>
  );
};

export default Login;
