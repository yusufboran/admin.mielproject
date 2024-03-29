import { Hidden } from "@mui/material";
import { Box, styled, useTheme } from "@mui/system";
import { themeShadows } from "app/components/MatxTheme/themeColors";
import useSettings from "app/hooks/useSettings";
import { sidenavCompactWidth, sideNavWidth } from "app/utils/constant";
import { convertHexToRGB } from "app/utils/utils";
import React from "react";
import Brand from "../../Brand";
import Sidenav from "../../Sidenav";

const SidebarNavRoot = styled(Box)(({ theme, width, primarybg, bgimgurl }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  height: "100vh",
  width: width,
  boxShadow: themeShadows[8],
  backgroundRepeat: "no-repeat",
  backgroundPosition: "top",
  backgroundSize: "cover",
  zIndex: 111,
  overflow: "hidden",
  color: theme.palette.text.primary,
  transition: "all 250ms ease-in-out",
  backgroundImage: `linear-gradient(to bottom, rgba(${primarybg}, 0.96), rgba(${primarybg}, 0.96)), url(${bgimgurl})`,
  "&:hover": {
    width: sideNavWidth,
    "& .sidenavHoverShow": {
      display: "block",
    },
    "& .compactNavItem": {
      width: "100%",
      maxWidth: "100%",
      "& .nav-bullet": {
        display: "block",
      },
      "& .nav-bullet-text": {
        display: "none",
      },
    },
  },
}));

const NavListBox = styled(Box)(() => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
}));

const Layout1Sidenav = () => {
  const theme = useTheme();
  const { settings, updateSettings } = useSettings();
  const leftSidebar = settings.layout1Settings.leftSidebar;
  const { mode, bgimgurl } = leftSidebar;

  const getSidenavWidth = () => {
    switch (mode) {
      case "compact":
        return sidenavCompactWidth;
      default:
        return sideNavWidth;
    }
  };
  const primaryRGB = convertHexToRGB(theme.palette.primary.main);

  const updateSidebarMode = (sidebarSettings) => {
    updateSettings({
      layout1Settings: {
        leftSidebar: {
          ...sidebarSettings,
        },
      },
    });
  };

  const handleSidenavToggle = () => {
    updateSidebarMode({ mode: mode === "compact" ? "full" : "compact" });
  };

  return (
    <SidebarNavRoot
      bgimgurl={bgimgurl}
      primarybg={primaryRGB}
      width={getSidenavWidth()}
    >
      <NavListBox>
        <Brand>
          <Hidden smDown>
            {mode === "compact" ? (
              <img
                alt="pin_drop"
                onClick={handleSidenavToggle}
                src="https://cdn-icons-png.flaticon.com/512/3208/3208641.png"
                width={"25px"}
                height={"25px"}
              />
            ) : (
              <img
                alt="pin_drop"
                onClick={handleSidenavToggle}
                src="https://cdn-icons-png.flaticon.com/512/3208/3208759.png"
                width={"25px"}
                height={"25px"}
              />
            )}
          </Hidden>
        </Brand>
        <Sidenav />
      </NavListBox>
    </SidebarNavRoot>
  );
};

export default React.memo(Layout1Sidenav);
