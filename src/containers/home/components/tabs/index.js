import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Table from "../table";
import { mockData } from "../../../../mockData";
import Hidden from "@material-ui/core/Hidden";
import { List } from "../list";
import { TYPES } from "../../../../constants/types";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  indicator: {
    height: 4
  },
  tabRoot: {
    marginBottom: 40,
    borderBottom: "1px solid #f1f1f1"
  },
  tabLabel: {
    textTransform: "capitalize",
    fontSize: 18,
    letterSpacing: 0,
    color: "#7987a2",
    padding: "6px 20px",
    marginBottom: 5
  },
  [theme.breakpoints.down("sm")]: {
    tabLabel: {
      fontSize: 12,
      padding: "5px 10px"
    }
  },
  tabPanel: {
    paddingLeft: 0,
    paddingRight: 0
  }
}));

const columns = [
  { id: "date", label: "DATE", size: 2 },
  { id: "campaign", label: "CAMPAIGN", size: 4 },
  {
    id: "view",
    label: "VIEW",
    size: 2
  },
  {
    id: "action",
    label: "ACTIONS",
    size: 4
  }
];

export default function CustomTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  //const [data, updateData] = React.useState(mockData.data);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        classes={{ indicator: classes.indicator, root: classes.tabRoot }}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
      >
        <Tab label="Upcoming Campaigns" className={classes.tabLabel} />
        <Tab label="Live Campaigns" className={classes.tabLabel} />
        <Tab label="Past Campaigns" className={classes.tabLabel} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Hidden smDown>
          <Table
            columns={columns}
            data={props.data.futureCampaign}
            updateData={props.updateDataCallback}
            type={TYPES.futureCampaign}
          />
        </Hidden>
        <Hidden mdUp>
          <List
            data={props.data.futureCampaign}
            updateData={props.updateDataCallback}
            type={TYPES.futureCampaign}
          />
        </Hidden>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Hidden smDown>
          <Table
            columns={columns}
            data={props.data.liveCampaign}
            updateData={props.updateDataCallback}
            type={TYPES.liveCampaign}
          />
        </Hidden>
        <Hidden mdUp>
          <List
            data={props.data.liveCampaign}
            updateData={props.updateDataCallback}
            type={TYPES.liveCampaign}
          />
        </Hidden>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Hidden smDown>
          <Table
            columns={columns}
            data={props.data.pastCampaign}
            updateData={props.updateDataCallback}
            type={TYPES.pastCampaign}
          />
        </Hidden>
        <Hidden mdUp>
          <List
            data={props.data.pastCampaign}
            updateData={props.updateDataCallback}
            type={TYPES.pastCampaign}
          />
        </Hidden>
      </TabPanel>
    </div>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};
