import { Box, Button, Card, Grid, styled, TextField } from "@mui/material";
import { forgotPassword } from "app/db/user";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { JWTRoot } from "./JWTRoot";

const ContentBox = styled(Box)(({ theme }) => ({
  padding: 32,
  background: theme.palette.background.default,
}));

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("admin@example.com");

  function handleSubmit(e) {
    e.preventDefault();
    forgotPassword(email);
    navigate("/");
  }

  return (
    <JWTRoot>
      <Card>
        <Grid>
          <Grid item xs={12}>
            <ContentBox style={{ backgroundColor: "transparent" }}>
              <form onSubmit={handleSubmit}>
                <TextField
                  type="email"
                  name="email"
                  size="small"
                  label="Email"
                  value={email}
                  variant="outlined"
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{ mb: 3, width: "100%" }}
                />

                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Reset Password
                </Button>

                <Button
                  fullWidth
                  color="primary"
                  variant="outlined"
                  onClick={() => navigate(-1)}
                  sx={{ mt: 2 }}
                >
                  Go Back
                </Button>
              </form>
            </ContentBox>
          </Grid>
        </Grid>
      </Card>
    </JWTRoot>
  );
};

export default ForgotPassword;
