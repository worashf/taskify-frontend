import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import PageHeader from "../components/page-header/PageHeader";
import { AddCircleOutlineOutlined } from "@mui/icons-material";

const ProjectList = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      sx={{
        m: { xs: "10px 3%", sm: "10px 3%", md: "10px 3%" },
      }}
    >
      <Box
        sx={{
          display: "flex ",
          justifyContent: {
            xs: "center",
            sm: "space-between",
            md: "space-between",
            lg: "space-between",
          },
          alignItems: { xs: "flex-start", sm: "center", md: "center" },
          flexDirection: { xs: "column", sm: "row", md: "row", lg: "row" },
        }}
      >
        <PageHeader title="Projects" subTitle=" Manage Projects" />
        <Button
          variant="outined"
          sx={{
            backgroundColor: colors.greenAccent[500],
            p: 1,
            "&:hover": {
              backgroundColor: colors.primary[400],
            },
          }}
          startIcon={<AddCircleOutlineOutlined />}
        >
          Add new project
        </Button>
      </Box>
      <Box>
        <Typography> Projects list</Typography>
      </Box>
    </Box>
  );
};

export default ProjectList;
