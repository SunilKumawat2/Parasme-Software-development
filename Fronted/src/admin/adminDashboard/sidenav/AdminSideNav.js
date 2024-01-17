import * as React from 'react';
import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import Menu from '@mui/material/Menu';
// import MenuItem  from '@mui/material/MenuItem ';
import { ListItem, ListItemButton, ListItemText, Menu, MenuItem } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import "../sidenav/AdminSideNav.css";
import { FaSlideshare,FaHireAHelper } from 'react-icons/fa';
import { BiLogOutCircle } from 'react-icons/bi';
import { BsFillAwardFill } from 'react-icons/bs';
import { GrTechnology } from 'react-icons/gr';
import { GoCodeReview } from 'react-icons/go';
import { BiSolidShoppingBags } from 'react-icons/bi';
import { AiFillDashboard,AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { FaHandshake } from 'react-icons/fa';
import { FcBriefcase } from 'react-icons/fc';
import { MdContentPasteSearch ,MdOutlineSocialDistance,MdDeveloperMode,MdOutlineDesignServices} from 'react-icons/md';
import { SiBloglovin } from 'react-icons/si';
import { TbSeo } from 'react-icons/tb';
import AdminLogo from "../../../assets/images/logo-footer.png"
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function AdminSideNav() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const navigate = useNavigate();
  const handleLogout = () => {
    // Remove the 'login' item from localStorage
    localStorage.removeItem('login');

    // Navigate to AdminLogin
    navigate('/AdminLogin');
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar className='bg-white text-danger'>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">

            <img src={AdminLogo} alt="Logo" style={{ width: "150px" }} />
          </Typography>
          <Typography variant="h6" noWrap component="div" className='AdminLogoutButton' onClick={handleLogout}>
            <BiLogOutCircle />
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={() => setOpen(!open)}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Divider />
        <List>
          <ListItem disablePadding sx={{ display: 'block' }}
            onClick={() => navigate('/AdminDashBoard/')}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
              </ListItemIcon>
              <AiFillDashboard style={{ marginRight: "10px" }} />
              <ListItemText primary="DashBoard" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ display: 'block' }}
            onClick={() => navigate('/AdminDashBoard/AdminSlider')}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
              </ListItemIcon>
              <FaSlideshare style={{ marginRight: "10px" }} />
              <ListItemText primary="Slider" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }} onClick={() => navigate('/AdminDashBoard/AdminAwards')}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
              </ListItemIcon>
              <BsFillAwardFill style={{ marginRight: "10px" }} /> <ListItemText primary="Awards" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }} onClick={() => navigate('/AdminDashBoard/AdminTechnology')}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
              </ListItemIcon>
              <GrTechnology style={{ marginRight: "10px" }} /> <ListItemText primary="Technologies" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }} onClick={() => navigate('/AdminDashBoard/AdminClientReview')}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
              </ListItemIcon>
              <GoCodeReview style={{ marginRight: "10px" }} /> <ListItemText primary="Client Review" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }} onClick={() => navigate('/AdminDashBoard/AdminPortFolio')}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
              </ListItemIcon>
              <BiSolidShoppingBags style={{ marginRight: "10px" }} /> <ListItemText primary="PortFolio" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }}
            onClick={() => navigate('/AdminDashBoard/AdminAllPortFolios')}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
              </ListItemIcon>
              <BiSolidShoppingBags style={{ marginRight: "10px" }} /> <ListItemText primary="All PortFolios" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }}
            onClick={() => navigate('/AdminDashBoard/AdminWebPortFolios')}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
              </ListItemIcon>
              <BiSolidShoppingBags style={{ marginRight: "10px" }} /> <ListItemText primary="Web PortFolios" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }}
            onClick={() => navigate('/AdminDashBoard/AdminMobilePortFolios')}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
              </ListItemIcon>
              <BiSolidShoppingBags style={{ marginRight: "10px" }} /> <ListItemText primary="Mobile PortFolios" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }}
            onClick={() => navigate('/AdminDashBoard/AdminPartners')}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
              </ListItemIcon>
              <FaHandshake style={{ marginRight: "10px" }} /> <ListItemText primary="Our Partner" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }}
            onClick={() => navigate('/AdminDashBoard/AdminEnquiry')}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
              </ListItemIcon>
              <MdContentPasteSearch style={{ marginRight: "10px" }} /> <ListItemText primary="Enquiry" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }}
            onClick={() => navigate('/AdminDashBoard/AdminHelpingForm')}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
              </ListItemIcon>
              <FaHireAHelper style={{ marginRight: "10px" }} /> <ListItemText primary="HelpingForm" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }}
            onClick={() => navigate('/AdminDashBoard/AdminCaseStudy')}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
              </ListItemIcon>
              <FcBriefcase style={{ marginRight: "10px" }} /> <ListItemText primary="Case Study" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }}
            onClick={() => navigate('/AdminDashBoard/AdminBrandingProjects')}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
              </ListItemIcon>
              <AiOutlineFundProjectionScreen style={{ marginRight: "10px" }} /> <ListItemText primary="Branding Projects" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }}
            onClick={() => navigate('/AdminDashBoard/AdminBlog')}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
              </ListItemIcon>
              <SiBloglovin style={{ marginRight: "10px" }} /> <ListItemText primary="Blog" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }}
            onClick={() => navigate('/AdminDashBoard/AdminSEO')}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
              </ListItemIcon>
              <TbSeo style={{ marginRight: "10px" }} /> 
              <ListItemText primary="SEO" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
{/*  This is Our Services Dropdown  */}
          <ListItem disablePadding sx={{ display: 'block' }}>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: 'center',
            px: 2.5,
          }}
          onClick={handleClick}
        >
          <MdOutlineDesignServices style={{ marginRight: "2px",marginLeft:"20px" }} /> 
          <ListItemText primary="Our Services" />
        </ListItemButton>
      </ListItem>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => navigate('/AdminDashBoard/AdminOurServicesGraphcs')}>
        GRAPHIC DESIGN
        </MenuItem>
        <MenuItem onClick={() => navigate('/AdminDashBoard/AdminOurServicesDesign')}>
        WEB DESIGN
        </MenuItem>
        <MenuItem onClick={() => navigate('/AdminDashBoard/AdminOurServicesEcommerce')}>
        E-COMMERCE
        </MenuItem>
        <MenuItem onClick={() => navigate('/AdminDashBoard/AdminOurServicesMobile')}>
        MOBILE APPS
        </MenuItem>
        <MenuItem onClick={() => navigate('/AdminDashBoard/AdminOurServicesPPC')}>
       PPC
        </MenuItem>
        {/* Add more menu items as needed */}
      </Menu>
      {/*  This is Our Services Dropdown  */}
          
      <ListItem disablePadding sx={{ display: 'block' }}
            onClick={() => navigate('/AdminDashBoard/AdminWebDevelopment')}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
              </ListItemIcon>
              <MdDeveloperMode style={{ marginRight: "10px" }} /> <ListItemText primary="Web Development" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
      <ListItem disablePadding sx={{ display: 'block' }}
            onClick={() => navigate('/AdminDashBoard/AdminDevelopmentServicesDetails')}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
              </ListItemIcon>
              <MdDeveloperMode style={{ marginRight: "10px" }} /> <ListItemText primary="Web Development Details" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
      <ListItem disablePadding sx={{ display: 'block' }}
            onClick={() => navigate('/AdminDashBoard/AdminSocialMediaLink')}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
              </ListItemIcon>
              <MdOutlineSocialDistance style={{ marginRight: "10px" }} /> <ListItemText primary="SocialMedia-Link" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}