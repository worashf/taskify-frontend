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
import { useState } from "react";
import { Form, useFormik, FormikProvider } from "formik";
import * as Yup from "yup";
import { styled } from "@emotion/styled";
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
const animate = {
  opacity: 1,
  y: 0,
  transition: {
    duration: 0.6,
    ease: easing,
    delay: 0.16,
  },
};

const Signup = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [showPassword, setShowPassword] = useState(false);
  const userSchema = Yup.object({
    firstName: Yup.string()
      .min(2, "Too short")
      .max(20, "Too Long")
      .required("First Name is required!"),
    lastName: Yup.string()
      .min(2, "Too short")
      .max(20, "Too Long")
      .required("Last Name is required!"),
    email: Yup.string()
      .email("Enter valid email address!")
      .required("Email is required!"),
    password: Yup.string()
      .min(6, "Too Short!")
      .max(10, "Too Long!")
      .required("Password is required"),
  });
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: userSchema,
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
          height: { sm: 1, md: "80vh", lg: "80vh" },
          padding: "20px",
          borderRadius: "10px",
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
                Enter Your Details
              </Typography>
            </Divider>
          </Box>
        </Box>
        <Form
          onSubmit={handleSubmit}
          className={theme.palette.mode === "dark" ? "form-dark" : "form-light"}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ md: 3, xs: 2 }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <TextField
                type="text"
                variant="standard"
                sx={{ p: "10px" }}
                placeholder="First Name"
                {...getFieldProps("firstName")}
              />
              {touched.firstName && errors.firstName && (
                <Box component="p" sx={{ my: 0, color: colors.redAccent[500] }}>
                  {errors.firstName}
                </Box>
              )}
            </Box>
            <Box display="flex" flexDirection="column" sx={{ width: "100%" }}>
              <TextField
                autoComplete="email"
                variant="standard"
                type="text"
                sx={{ p: "10px" }}
                placeholder="Last Name"
                {...getFieldProps("lastName")}
              />
              {touched.lastName && errors.lastName && (
                <Box component="p" sx={{ my: 0, color: colors.redAccent[500] }}>
                  {errors.lastName}
                </Box>
              )}
            </Box>
          </Stack>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            mt="20px"
            spacing={{ md: 3, xs: 2 }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <TextField
                name="emmail"
                type="email"
                variant="standard"
                sx={{ p: "10px" }}
                placeholder="Email"
                {...getFieldProps("email")}
              />
              {touched.email && errors.email && (
                <Box component="p" sx={{ my: 0, color: colors.redAccent[500] }}>
                  {errors.email}
                </Box>
              )}
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <TextField
                name="password"
                sx={{
                  p: "10px",
                }}
                type={showPassword ? "text" : "password"}
                variant="standard"
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
                <Box component="p" sx={{ my: 0, color: colors.redAccent[500] }}>
                  {errors.password}
                </Box>
              )}
            </Box>
          </Stack>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            mt="20px"
            spacing={{ md: 3, xs: 2 }}
            margin="20px auto"
          >
            <TextField
              sx={{
                width: { sm: 1 / 2, md: 1 / 4 },
              }}
              margin="20px  auto"
              type="file"
              placeholder="Upload"
            />
            <Button
              sx={{
                backgroundColor: colors.grey[100],
                width: { sm: 1 / 2, md: 1 / 4 },
                color: colors.primary[700],
                fontSize: "1.1rem",
                padding: "5px",
                margin: " 10px 5px",
                "&: hover": {
                  backgroundColor: colors.grey[200],
                },
              }}
            >
              Sign Up
            </Button>
          </Stack>
        </Form>
      </Box>
    </FormikProvider>
  );
};

export default Signup;
