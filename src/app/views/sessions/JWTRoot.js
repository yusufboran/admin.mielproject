import { Box } from "@mui/material";
import { styled } from "@mui/system";

const FlexBox = styled(Box)(() => ({ display: "flex", alignItems: "center" }));
const JustifyBox = styled(FlexBox)(() => ({ justifyContent: "center" }));
export const JWTRoot = styled(JustifyBox)(() => ({
  background: "#1A2038",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundImage:
    'url("https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
  minHeight: "100% !important",
  "& .card": {
    maxWidth: 800,
    minHeight: 400,
    margin: "1rem",
    display: "flex",
    borderRadius: 12,
    alignItems: "center",
  },
}));
