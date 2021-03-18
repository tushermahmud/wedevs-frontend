import React from "react";
import logo from "../logo.svg";
import Drawer from '@material-ui/core/Drawer';
import { Menu, MenuItem } from '@material-ui/core';
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import HistoryIcon from '@material-ui/icons/History';
import profileImage from "../assets/images/download.jpg";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import Typography from "@material-ui/core/Typography";
import CategoryIcon from '@material-ui/icons/Category';
import PeopleIcon from '@material-ui/icons/People';
import { Accordion, AccordionSummary, AccordionDetails } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Link } from "react-router-dom";
import { logout } from '../redux/actions/authAction'
import { useDispatch, useSelector } from 'react-redux'

const Sidebar = ({
    classes,
    open,
    handleDrawerClose,
    handleClose,
    theme,
    anchorEl,
}) => {
    const dispatch = useDispatch();

    const logoutDone=()=>{
        console.log("tusher")
        dispatch(logout())
    }
    return (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.drawerHeader}>
                <div style={{ display: "flex" }}>
                    <img src={logo} alt="" style={{ width: "60px", height: "60px" }} />
                    <span
                        style={{ marginTop: "10%", fontSize: "24px", fontWeight: "bold" }}
                    >
                        Admin
          </span>
                </div>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === "ltr" ? (
                        <ChevronRightIcon />
                    ) : (
                            <ChevronRightIcon />
                        )}
                </IconButton>
            </div>
            <Divider />
            <div style={{ background: "#3D4977", cursor: "pointer" }}>
                <List>
                    <ListItem className="listItem">
                        <img
                            src={profileImage}
                            className="profileImage"
                            alt="Sazzad Mahmud Tusher"
                        />
                        <ListItemText className="profileText">
                            <React.Fragment>
                                <span
                                    style={{
                                        display: "table",
                                        margin: "0 auto",
                                        fontSize: ".7rem",
                                        fontWeight: "300",
                                    }}
                                >
                                    Software Engineer
                </span>
                                <span>Sazzad Mahmud Tusher</span>
                            </React.Fragment>
                        </ListItemText>
                    </ListItem>
                </List>
            </div>
            <Divider />
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose,logoutDone}>Logout</MenuItem>
            </Menu>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <PeopleIcon style={{ paddingRight: "10px" }} />
                    <Typography className={classes.heading} style={{ marginTop: "2px" }}>
                        Employees
          </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <List style={{ width: "100%" }}>
                        <ListItem button>
                            <ListItemText primary="All Employees" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Add Employee" />
                        </ListItem>
                    </List>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <CategoryIcon style={{ paddingRight: "10px" }} />
                    <Typography className={classes.heading} style={{ marginTop: "2px" }}>
                        Categories
          </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <List style={{ width: "100%" }}>
                        <ListItem button>
                            <ListItemText primary="All Categories" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Add Category" />
                        </ListItem>
                    </List>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <AddShoppingCartIcon style={{ paddingRight: "10px" }} />
                    <Typography className={classes.heading} style={{ marginTop: "2px" }}>
                        Products
          </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <List style={{ width: "100%" }}>
                        <Link to="/products" style={{ textDecoration: "none", color: '#000' }}>
                            <ListItem button>
                                <ListItemText primary="All Products" />
                            </ListItem>
                        </Link>
                        <Link to="/add-product" style={{ textDecoration: "none", color: '#000' }}>
                        <ListItem button>
                            <ListItemText primary="Add Product" />
                        </ListItem>
                        </Link>
                    </List>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <HistoryIcon style={{ paddingRight: "10px" }} />
                    <Typography className={classes.heading} style={{ marginTop: "2px" }}>
                        History
          </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <List style={{ width: "100%" }}>
                        <ListItem button>
                            <ListItemText primary="All History" />
                        </ListItem>
                    </List>
                </AccordionDetails>
            </Accordion>
        </Drawer>
    );
};
export default Sidebar;