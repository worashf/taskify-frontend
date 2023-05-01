import { Paper, Stack, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

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
      }}
    >
      <Typography variant="h5">{name}</Typography>
    </Paper>
  );
};

export default ProjectItem;
