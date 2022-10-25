import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import BigCard from "../../components/BigCard";
import SmallCard from "../../components/SmallCard";
import mobileImage from "../../images/tabs_big_image.jpg";
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
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Offers" {...a11yProps(0)} />
          <Tab label="Mobile" {...a11yProps(1)} />
          <Tab label="TV & AV" {...a11yProps(2)} />
          <Tab label="Home Appliances" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-2 row-span-2">
            <BigCard
              image={mobileImage}
              title="Samsung Week"
              description={
                "Step into the next chapter,a week of amazing offers awaits"
              }
            />
          </div>
          <BigCard image={galaxyS22} />
          <BigCard image={galaxyA73} />
          <BigCard image={galaxyA53} />
          <BigCard image={galaxyA23} />
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
    </Box>
  );
}
