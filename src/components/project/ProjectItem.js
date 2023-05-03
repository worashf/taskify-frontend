import {
  Paper,
  Box,
  Typography,
  useTheme,
  Menu,
  MenuItem,
  Button,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { useState } from "react";

import { tokens } from "../../theme";
import {
  EditOutlined,
  DeleteOutline,
  KeyboardArrowDown,
  AssignmentInd,
  DoneOutlineOutlined,
} from "@mui/icons-material";

const options = ["Edit", "Delete", "Assign", "Close"];
const ProjectItem = ({ name, status, titleColor }) => {
  const theme = useTheme();
  const [anchorEl, setAnchorEL] = useState(null);
  const [selected, setSelected] = useState(-1);
  const open = Boolean(anchorEl);
  const colors = tokens(theme.palette.mode);

  const handleClose = () => {
    setAnchorEL(null);
  };

  const openMenu = (e) => {
    setAnchorEL(e.currentTarget);
  };

  const onMenuItemClick = (event, index) => {
    setAnchorEL(null);
    setSelected(index);
  };

  return (
    <Paper
      elevation="100px"
      sx={{
        backgroundColor: `${
          status === "open" ? colors.primary[400] : colors.greenAccent[600]
        }`,
        lineHeight: 2,
        p: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: titleColor,
          }}
        >
          {" "}
          {name.length > 40 ? `${name.substring(0, 40)} ... ` : name}
        </Typography>

        <Button
          onClick={openMenu}
          id="demo-customized-button"
          aria-controls={open ? "demo-customized-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          variant="contained"
          disableElevation
          endIcon={<KeyboardArrowDown />}
        >
          Actions
        </Button>
        <Menu
          elevation={0}
          open={open}
          onClose={handleClose}
          anchorEl={anchorEl}
        >
          {options.map((option, index) => (
            <MenuItem
              key={index}
              onClick={(event) => onMenuItemClick(event, index)}
              selected={index === selected}
            >
              {option === "Edit" && (
                <>
                  <ListItemIcon>
                    <EditOutlined />
                  </ListItemIcon>
                  <ListItemText> {option}</ListItemText>
                </>
              )}
              {option === "Delete" && (
                <>
                  <ListItemIcon>
                    <DeleteOutline />
                  </ListItemIcon>
                  <ListItemText> {option}</ListItemText>
                </>
              )}
              {option === "Assign" && (
                <>
                  <ListItemIcon>
                    <AssignmentInd />
                  </ListItemIcon>
                  <ListItemText> {option}</ListItemText>
                </>
              )}
              {option === "Close" && (
                <>
                  <ListItemIcon>
                    <DoneOutlineOutlined />
                  </ListItemIcon>
                  <ListItemText> {option}</ListItemText>
                </>
              )}
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <Box>
        <Typography variant="p">6 tasks completed</Typography>
      </Box>
    </Paper>
  );
};

export default ProjectItem;
