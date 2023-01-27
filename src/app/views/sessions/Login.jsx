import { LoadingButton } from "@mui/lab";
import { Card, Stack, TextField } from "@mui/material";
import { Box, styled, useTheme } from "@mui/system";
import useAuth from "app/hooks/useAuth";
import { Formik } from "formik";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { JWTRoot } from "./JWTRoot";

const ContentBox = styled(Box)(() => ({
  height: "100%",
  padding: "32px",
  position: "relative",
  background: "rgba(0, 0, 0, 0.01)",
}));

const initialValues = {
  email: "admin@mielproje.com",
  password: "admin",
  remember: true,
};

// form field validation schema
const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(5, "Password must be 5 character length")
    .required("Password is required!"),
  email: Yup.string()
    .email("Invalid Email address")
    .required("Email is required!"),
});

const JwtLogin = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();

  const handleFormSubmit = async (values) => {
    setLoading(true);
    try {
      await login(values.email, values.password);
      navigate("/");
    } catch (e) {
      setLoading(false);
    }
  };

  return (
    <JWTRoot>
      <Card>
        <ContentBox style={{ backgroundColor: "transparent" }}>
          <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={validationSchema}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  size="small"
                  type="email"
                  name="email"
                  label="Email"
                  variant="outlined"
                  onBlur={handleBlur}
                  value={values.email}
                  onChange={handleChange}
                  helperText={touched.email && errors.email}
                  error={Boolean(errors.email && touched.email)}
                  sx={{ mb: 3 }}
                />

                <TextField
                  fullWidth
                  size="small"
                  name="password"
                  type="password"
                  label="Password"
                  variant="outlined"
                  onBlur={handleBlur}
                  value={values.password}
                  onChange={handleChange}
                  helperText={touched.password && errors.password}
                  error={Boolean(errors.password && touched.password)}
                  sx={{ mb: 1.5 }}
                />
                <Stack direction="row" justifyContent="flex-end">
                  <NavLink
                    to="/session/forgot-password"
                    style={{ color: theme.palette.primary.main }}
                  >
                    <text>Forgot password</text>
                  </NavLink>
                </Stack>
                <LoadingButton
                  type="submit"
                  color="primary"
                  loading={loading}
                  variant="contained"
                  sx={{ my: 2 }}
                >
                  Login
                </LoadingButton>
              </form>
            )}
          </Formik>
        </ContentBox>
      </Card>
    </JWTRoot>
  );
};

export default JwtLogin;
