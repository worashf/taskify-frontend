import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
const PageHeader = ({ title, subTitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="20px">
      <Typography
        variant="h2"
        sx={{
          color: colors.grey[200],
          fontWeight: "bold",
          m: "0 0 5px 0",
        }}
      >
        {" "}
        {title}
      </Typography>

      <Typography
        variant="h5"
        sx={{
          color: colors.greenAccent[400],
        }}
      >
        {subTitle}
      </Typography>
    </Box>
  );
};

export default PageHeader;
