// Icons
import AccountCircleIcon from "@mui/icons-material/AccountCircleOutlined";
import BackupIcon from "@mui/icons-material/BackupOutlined";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CloudIcon from "@mui/icons-material/CloudOutlined";
import CodeIcon from "@mui/icons-material/CodeOutlined";
import WebIcon from "@mui/icons-material/DashboardOutlined";
import CalendarIcon from "@mui/icons-material/EventOutlined";
import FileDownloadIcon from "@mui/icons-material/FileDownloadOutlined";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafetyOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import SettingsIcon from "@mui/icons-material/SettingsOutlined";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
//
import { CSSObject, styled, Theme, useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import React, { FunctionComponent } from "react";
import { Link, Route, RouteComponentProps, Switch } from "react-router-dom";
//
import Routes from "../../route/Routes";
import IRoute from "../../interfaces/IRoute";
import Footer from "../footer/Footer";
import Navigation from "./Navigation";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Navbars: FunctionComponent = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const renderSwitchIcon = (param: string) => {
    switch (param) {
      case "Overview":
        return (
          <Tooltip title='Overview' placement='right'>
            <AccountCircleIcon />
          </Tooltip>
        );
      case "Skills":
        return (
          <Tooltip title='Skills' placement='right'>
            <CodeIcon />
          </Tooltip>
        );
      case "Projects":
        return (
          <Tooltip title='Projects' placement='right'>
            <WebIcon />
          </Tooltip>
        );

      case "Settings":
        return (
          <Tooltip title='Settings' placement='right'>
            <SettingsIcon />
          </Tooltip>
        );
      case "Upload":
        return (
          <Tooltip title='Upload' placement='right'>
            <BackupIcon />
          </Tooltip>
        );
      case "Search":
        return (
          <Tooltip title='Search' placement='right'>
            <SearchIcon />
          </Tooltip>
        );
      case "Download":
        return (
          <Tooltip title='Download' placement='right'>
            <FileDownloadIcon />
          </Tooltip>
        );
      case "Covid-19":
        return (
          <Tooltip title='Covid' placement='right'>
            <HealthAndSafetyIcon />
          </Tooltip>
        );
      case "Weather":
        return (
          <Tooltip title='Weather' placement='right'>
            <CloudIcon />
          </Tooltip>
        );
      case "Calendar":
        return (
          <Tooltip title='Calendar' placement='right'>
            <CalendarIcon />
          </Tooltip>
        );
      default:
        return;
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position='fixed' open={open}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Navigation /> {/** Horizontal navbars */}
        </Toolbar>
      </AppBar>
      <Drawer variant='permanent' open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {["Overview", "Skills", "Projects"].map((text: string, index) => (
            <Link key={index} to={text === "Overview" ? "./" : `./${text}`}>
              <ListItem button>
                <ListItemIcon>{renderSwitchIcon(text)}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          ))}
        </List>
        {/* <Divider /> */}
        {/* <List>
          {["Settings", "Upload", "Download"].map((text, index) => (
            <ListItem button key={index}>
              <ListItemIcon>{renderSwitchIcon(text)}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
        {/* <Divider /> */}
        {/* <List>
          {["Calendar", "Weather", "Covid-19"].map((text, index) => (
            <ListItem button key={index}>
              <ListItemIcon>{renderSwitchIcon(text)}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <Box component='main' sx={{ flexGrow: 1 }}>
        <DrawerHeader />
        <Switch>
          {Routes.map((route: IRoute, index: number) => (
            <Route
              key={index}
              path={route.path}
              render={(props: RouteComponentProps<any>) => <route.component />}
            />
          ))}
        </Switch>
        <Box>
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};

export default Navbars;
