import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { createTheme, useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import BigCard from "../../components/UI/BigCard";
import SmallCard from "../../components/UI/SmallCard";
import mobileImage from "../../images/bag_image_tabs.jpg";
import monalisa from "../../images/monalisa.jpg";
import washingMachine from "../../images/washing_machine.jpg";
import galaxyS22 from "../../images/galaxy_S22.jpg";
import galaxyA73 from "../../images/galaxy_A73.jpg";
import galaxyA53 from "../../images/galaxy_A53.jpg";
import galaxyA23 from "../../images/galaxy_A23.jpg";
import QLED1 from "../../images/QLED1.jpg";
import QLED2 from "../../images/QLED2.jpg";
import CrystalUHD from "../../images/CrystalUHD.jpg";
import UHD from "../../images/UHD.jpg";
import Washer9Kg from "../../images/washer9kg.jpg";
import Washer16Kg from "../../images/washer16kg.jpg";
import WindAC from "../../images/windAC.jpg";
import CoolingAC from "../../images/coolingAC.jpg";

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
      <AppBar position="static" sx={{ boxShadow: "none" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          indicatorColor="primary"
          sx={{ color: "black", bgcolor: "white" }}
          centered
        >
          <Tab label="Offers" {...a11yProps(0)} disableRipple />
          <Tab label="TV & AV" {...a11yProps(1)} disableRipple />
          <Tab label="Home Appliances" {...a11yProps(2)} disableRipple />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <div className="grid grid-cols-4 gap-5">
            <BigCard
              image={mobileImage}
              title="Samsung Week"
              description={
                "Step into the next chapter,a week of amazing offers awaits"
              }
            />

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
          <div className="grid grid-cols-4 gap-5">
            <BigCard image={monalisa} />
            <SmallCard
              image={QLED1}
              title="65&quot; QLED 4K Q60B"
              description="Buy now and save PKR 36,000"
            />
            <SmallCard
              image={QLED2}
              title="65&quot; QLED 4K Q70B"
              description="Buy now and save PKR 25,000"
            />
            <SmallCard
              image={CrystalUHD}
              title="65\&quot; Crystal UHD 4K BU8000"
              description="Buy now and save PKR 36,000"
            />
            <SmallCard
              image={UHD}
              title="75&quot; UHD 4K AU7000"
              description="Buy now and save PKR 65,000"
            />
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div className="grid grid-cols-4 gap-5">
            <BigCard
              image={washingMachine}
              title="WW80J5413 Washer with Ecobubble, 8.0 Kg"
              description="&nbsp;"
            />
            <SmallCard
              image={Washer9Kg}
              title="WA90T5260BWURT Top loading Washer, 9 Kg"
              description=""
            />
            <SmallCard
              image={Washer16Kg}
              title="WA16J6750SVURT Top Loading Washer, 16 Kg"
              description=""
            />
            <SmallCard
              image={WindAC}
              title="AR9500T Wall-mount AC with Wind-Free"
              description=""
            />
            <SmallCard
              image={CoolingAC}
              title="AR9500T Wall-mount AC with Fast Cooling_AX"
              description=""
            />
          </div>
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
