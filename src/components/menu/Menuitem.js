import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";
import { MenuItem } from "react-pro-sidebar";
import { Typography } from "@mui/material";
import { tokens } from "../../theme";

const Menuitem = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.primary[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
      component={<Link to={to} />}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

export default Menuitem;
