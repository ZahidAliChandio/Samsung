import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import {createTheme, useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import BigCard from "../../components/UI/BigCard";
import SmallCard from "../../components/UI/SmallCard";
import mobileImage from "../../images/bag_image_tabs.jpg";
import galaxyMobile from "../../images/galaxy_mobile.jpg";
import monalisa from "../../images/monalisa.jpg";
import washingMachine from "../../images/washing_machine.jpg";
import galaxyS22 from "../../images/galaxy_S22.jpg";
import galaxyA73 from "../../images/galaxy_A73.jpg";
import galaxyA53 from "../../images/galaxy_A53.jpg";
import galaxyA23 from "../../images/galaxy_A23.jpg";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box
      sx={{
        width: "100%",
        marginTop: "3rem",
        textAlign: "center",
      }}
    >
      <h2 className="font-bold text-4xl my-8">This Month's Picks</h2>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          indicatorColor="secondary"
          centered
        >
          <Tab label="Offers" {...a11yProps(0)} />
          <Tab label="Mobile" {...a11yProps(1)} />
          <Tab label="TV & AV" {...a11yProps(2)} />
          <Tab label="Home Appliances" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <div className="grid grid-cols-4 gap-5">
            <div className="col-span-2 row-span-2">
              <BigCard
                image={mobileImage}
                title="Samsung Week"
                description={
                  "Step into the next chapter,a week of amazing offers awaits"
                }
              />
            </div>
            <SmallCard
              image={galaxyS22}
              title="Galaxy S22"
              description="Save Big and get Galaxy S22 in just PKR 207,999 along with complementary 35W charger"
            />
            <SmallCard
              image={galaxyA73}
              title="Galaxy A73"
              description="Save Big and get Galaxy A73 in just PKR 121,500"
            />
            <SmallCard
              image={galaxyA53}
              title="Galaxy A53"
              description="Save Big and get Galaxy A53 in just PKR 93,999"
            />
            <SmallCard
              image={galaxyA23}
              title="Galaxy A23"
              description="Save Big and get Galaxy A23 in just PKR 48,999 with complementary Smart Tag"
            />
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <BigCard image={galaxyMobile} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <BigCard image={monalisa} />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <BigCard image={washingMachine} />
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
