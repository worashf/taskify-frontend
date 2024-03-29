import {
  Box,
  Button,
  Typography,
  Grid,
  useTheme,
  Divider,
} from "@mui/material";
import { tokens } from "../theme";
import PageHeader from "../components/page-header/PageHeader";
import {
  AddCircleOutlineOutlined,
  CheckCircleOutlineOutlined,
  DonutLargeOutlined,
} from "@mui/icons-material";

import ProjectItem from "../components/project/ProjectItem";

const projects = [
  { name: "Create app1", status: "open" },
  { name: "Create app2", status: "open" },
  { name: "Create app3", status: "finished" },
  { name: "Create app4", status: "finished" },
  { name: "Create app5", status: "finished" },
  { name: "Create app6", status: "finished" },
  { name: "Create app7", status: "open" },
  { name: "Create app8", status: "open" },
  { name: "Create app9", status: "open" },
  { name: "Create app10", status: "open" },
  {
    name: "Create app Create app Create app Create app import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';",
    status: "open",
  },
];

const openedProjects = projects.filter((item) => item.status === "open");
const finishedProjects = projects.filter((item) => item.status === "finished");
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
            backgroundColor: colors.greenAccent[700],
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

      <Grid container spacing={5}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
            }}
          >
            <DonutLargeOutlined
              sx={{ color: colors.blueAccent[400], fontSize: "30px" }}
            />

            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                fontStyle: "italic",
                color: colors.blueAccent[400],
              }}
            >
              Opened
            </Typography>
          </Box>

          <Box
            sx={{
              mt: 2,
              display: "grid",
              gridTemplateColumns: { md: "1fr 1fr" },
              gap: 2,
            }}
          >
            {openedProjects.map((item) => (
              <ProjectItem
                key={item.name}
                name={item.name}
                status={item.status}
                titleColor={colors.blueAccent[400]}
              />
            ))}
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
            }}
          >
            <CheckCircleOutlineOutlined
              sx={{ color: colors.redAccent[600], fontSize: "30px" }}
            />

            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                fontStyle: "italic",
                color: colors.redAccent[600],
              }}
            >
              Finished
            </Typography>
          </Box>

          <Box
            sx={{
              mt: 2,
              display: "grid",
              gridTemplateColumns: { md: "1fr 1fr" },
              gap: 2,
            }}
          >
            {finishedProjects.map((item) => (
              <ProjectItem
                key={item.name}
                name={item.name}
                status={item.status}
                titleColor={colors.redAccent[600]}
              />
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectList;
