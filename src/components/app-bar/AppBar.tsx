import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import PaidIcon from "@mui/icons-material/Paid";
import DescriptionIcon from "@mui/icons-material/Description";
import ContactsIcon from "@mui/icons-material/Contacts";
import PersonIcon from "@mui/icons-material/Person";
import { Avatar, Stack } from "@mui/material";
import SearchAppBar from "./search/SearchAppBar";
import MenuAppBar from "./menu-app-bar/menu";

const drawerWidth = 180;

const listItem = (
  <List>
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <AccountBalanceWalletIcon />
        </ListItemIcon>
        <ListItemText primary="Accounts" />
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <PaidIcon />
        </ListItemIcon>
        <ListItemText primary="Payroll" />
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <DescriptionIcon />
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="Advisor" />
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <ContactsIcon />
        </ListItemIcon>
        <ListItemText primary="Contacts" />
      </ListItemButton>
    </ListItem>
  </List>
);

export default function PermanentDrawerLeft() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="default"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          display: "flex",
          
        }}
      >
        <Toolbar >
        <Box sx={{ width: '100%', ml: 1 }} />
          <SearchAppBar />
          <MenuAppBar></MenuAppBar>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar disableGutters>
          <Stack direction="row" spacing={1} alignItems="center">
            <Avatar
              alt="assiduus"
              src="D:\react-learning\assiduus-assignment\public\assiduus.png"
              variant="square"
            />
            <Typography variant="subtitle2">ASSIDUUS</Typography>
          </Stack>
        </Toolbar>
        <Divider />
        {listItem}
      </Drawer>
      
    </Box>
  );
}
