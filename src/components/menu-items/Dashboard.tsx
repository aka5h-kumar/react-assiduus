
import DashboardIcon from '@mui/icons-material/Dashboard';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';


const Dashboard = (  ) => {
    return (
      <ListItemButton>
            <ListItemIcon>
                  <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
      </ListItemButton>
    )
  }
   
  export default Dashboard