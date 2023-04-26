import { LinkedIn } from "@mui/icons-material";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  Box,
  Container,
  Grid,
  Typography,
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
} from "@mui/material";
import { Divider } from "antd";
import React, { useState } from "react";

const SocialCard = () => {
  const [spacing, setSpacing] = useState(2);
  const [value, setValue] = useState(0);
  const handleChange = (e) => {
    setSpacing(Number(e.target.value));
  };
  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={5}>
      <Grid item xs={12}>
        <Grid
          container
          sx={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: "50px",
          }}
          spacing={spacing}
        >
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              <Paper
                sx={{
                  height: 140,
                  width: 100,
                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Paper sx={{ p: 2 }}>
          <Grid container>
            <Grid item>
              <FormControl component="fieldset">
                <FormLabel component="legend">spacing</FormLabel>
                <RadioGroup
                  name="spacing"
                  aria-label="spacing"
                  value={spacing.toString()}
                  onChange={handleChange}
                  row
                >
                  {[0, 0.5, 1, 2, 3, 4, 8, 12].map((value) => (
                    <FormControlLabel
                      key={value}
                      value={value.toString()}
                      control={<Radio />}
                      label={value.toString()}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid container rowSpacing={1} columnSpacing={{ sm: 1, md: 5, lg: 6 }}>
        <Grid
          item
          md={6}
          lg={4}
          xl={6}
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Paper
            sx={{
              width: "70%",
              height: 10,
              backgroundColor: "black",
              padding: 2,
              margin: 2,
            }}
          >
            <p>6</p>
          </Paper>
        </Grid>
        <Grid
          item
          md={4}
          lg={6}
          xl={6}
          sx={{
            display: "flex",
            width: "70%",
            justifyContent: "space-",
            alignItems: "center",
          }}
        >
          <Paper
            sx={{
              width: "70%",
              height: 10,
              backgroundColor: "black",
            }}
          >
            <p>6</p>
          </Paper>
        </Grid>
        <Grid
          item
          md={4}
          lg={6}
          xl={6}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Paper
            sx={{
              width: 100,
              height: 10,
              backgroundColor: "black",
            }}
          >
            <p>6</p>
          </Paper>
        </Grid>
        <Grid
          item
          md={4}
          lg={6}
          xl={6}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Paper
            sx={{
              width: 100,
              height: 10,
              backgroundColor: "black",
            }}
          >
            <p>6</p>
          </Paper>
        </Grid>
      </Grid>

      <Stack
        spacing={5}
        direction="row"
       
      >
        <Paper
          sx={{
            width: 100,
            height: 10,
            backgroundColor: "red",
          }}
        >
          <p>6</p>
        </Paper>

        <Paper
          sx={{
            width: 100,
            height: 10,
            backgroundColor: "red",
          }}
        >
          <p>6</p>
        </Paper>

        <Paper
          sx={{
            width: 100,
            height: 10,
            backgroundColor: "red",
          }}
        >
          <p>6</p>
        </Paper>

        <Box sx={{ width: 500 }}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Favorite" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="NearBy" icon={<LocationOnIcon />} />
          </BottomNavigation>
        </Box>
      </Stack>
    </Grid>
  );
};

export default SocialCard;
