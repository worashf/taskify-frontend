import React, { useState } from "react";
import { Box, Divider, Typography, useTheme } from "@mui/material";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import TaskOutlinedIcon from "@mui/icons-material/TaskOutlined";
import DuoOutlinedIcon from "@mui/icons-material/DuoOutlined";
import { tokens } from "../theme";
import Menuitem from "../components/menu/Menuitem";
const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("Projects");
  const { collapseSidebar, collapsed } = useProSidebar();

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",

        "& .ps-menu-label": {
          padding: "10px 10px 5px 15px !important",
        },
        "& .ps-menu-button": {
          width: "100%",
        },
        "&.hanberger": {
          fontSize: "40px",
          width: "50px",
        },
        "& .ps-menu-button:hover": {
          backgroundColor: `${colors.primary[400]} !important`,
          color: `${colors.greenAccent[600]} !important`,
          width: "70%",
        },
        "& .ps-menu-label.ps-active": {
          color: `${colors.greenAccent[500]} !important`,
          backgroundColor: "transparent !important",
        },
      }}
    >
      <Sidebar backgroundColor={colors.primary[400]}>
        <Menu>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            marginRight="16px"
          >
            <MenuItem
              onClick={() => collapseSidebar()}
              className="hanburger"
              icon={<MenuOutlinedIcon className="hanburger" />}
            ></MenuItem>
            {!collapsed && (
              <Box>
                <Typography
                  variant="h3"
                  fontWeight="700"
                  sx={{
                    "&:hover": {
                      color: `${colors.greenAccent[400]}`,
                    },
                  }}
                >
                  Taskify
                </Typography>
              </Box>
            )}
          </Box>
          <Divider />
          {!collapsed && (
            <Box my="10px">
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  //   alignItems: "center",
                }}
              >
                <img
                  alt="profile-user"
                  width="50px"
                  height="50px"
                  src={`./assets/worash.jpg`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h5"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Worash
                </Typography>
                <Typography variant="h6" color={colors.greenAccent[500]}>
                  Admin
                </Typography>
              </Box>
            </Box>
          )}
          <Divider />
          <Box
            sx={{
              mt: "3%",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <Menuitem
              title="Projects"
              to="/"
              icon={<AccountTreeIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Menuitem
              title="Teams"
              to="/login"
              icon={<GroupAddOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Menuitem
              title="Meetings"
              to="/signup"
              icon={<DuoOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Recent Projects
            </Typography>
            <Menuitem
              title="Create UI"
              to="/bar"
              icon={<TaskOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Menuitem
              title="Test UI"
              to="/pie"
              icon={<TaskOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Menuitem
              title="Review Code"
              to="/line"
              icon={<TaskOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Menuitem
              title="Deploy Code"
              to="/geography"
              icon={<TaskOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SideBar;
