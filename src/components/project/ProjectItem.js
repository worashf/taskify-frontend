import { Paper, Box, Typography, useTheme } from "@mui/material";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { tokens } from "../../theme";
import { MoreHorizOutlined } from "@mui/icons-material";

const ProjectItem = ({ name, status }) => {
  const theme = useTheme();

  const colors = tokens(theme.palette.mode);

  return (
    <Paper
      elevation="100px"
      sx={{
        backgroundColor: `${
          status === "open" ? colors.primary[400] : colors.greenAccent[600]
        }`,
        height: 60,
        lineHeight: "60px",
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
        <Typography variant="h5">
          {" "}
          {name.length > 40 ? `${name.substring(0, 40)} ... ` : name}
        </Typography>
        <MoreVertOutlinedIcon />
      </Box>
    </Paper>
  );
};

export default ProjectItem;
