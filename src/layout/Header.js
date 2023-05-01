import React, { useContext } from "react";
import { Box, Divider, IconButton, InputBase, useTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

import { ColorModeContext, tokens } from "../theme";

const Header = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: "2",
          mt: 2,
        }}
      >
        <Box
          display="flex"
          backgroundColor={colors.primary[400]}
          borderRadius="3px"
          marginLeft="10px"
        >
          <InputBase placeholder="Search Project" sx={{ ml: 2, flex: 1 }} />
          <IconButton type="button" p="2px">
            <SearchIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            marginRight: 2,
          }}
        >
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlinedIcon />
            ) : (
              <LightModeOutlinedIcon />
            )}
          </IconButton>
          <IconButton>
            <NotificationsOutlinedIcon />
          </IconButton>
          <IconButton>
            <PersonOutlinedIcon />
          </IconButton>
        </Box>
      </Box>
      <Divider
        sx={{
          width: 1,
          mt: 2,
        }}
      />
    </>
  );
};

export default Header;
