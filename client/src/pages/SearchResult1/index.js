import React, { Component } from "react";
import Ownerscard from "../../components/Ownerscard";
import API from "../../utils/API";
import "./style.css";
import Nav1 from "../../components/Nav1";
import Footer from "../../components/Footer";
import Feedback from "../../components/Feedback/feedback";
// Material UI Grid Layout imports
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
// Material UI Tabs imports
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
// Material UI sidebar imports
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";

const drawerWidth = 240;

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: "8px" }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
  },
  tabs: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 1,
    margin: "auto",
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "100%",
    border: "solid gray",
    borderRadius: "10px",
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerList: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
  },
  large: {
    width: 150,
    height: 150,
    marginTop: "20px",
  },
});

class SearchResult1 extends Component {
  state = {
    listing: [],
    reserved: [],
    user: {},
    userId: "",
    userName: "",
    firstname: "",
    lastname: "",
    photo: "",
    reservationsObject: {},
    // For tabs
    value: 0,
    mobileOpen: false,
  };

  componentDidMount() {
    this.userInfo();
    this.loadListings();
  }

  userInfo = () => {
    API.getUser()
      .then((res) => {
        console.log("=======");
        console.log(res);
        console.log("=======");
        this.setState({ user: res.data });
        this.setState({ userId: res.data.user._id });
        this.setState({ firstname: res.data.user.firstname });
        this.setState({ lastname: res.data.user.firstname });
        this.setState({ photo: res.data.user.photo });
        this.loadListings();
        this.loadReserved();
      })
      .catch((err) => console.log(err));
  };

  tester() {
    console.log("testing user");
    console.log(this.state);
  }

  loadListings = () => {
    API.getListingsForProf()

      .then((res) => {
        this.setState({ listing: res.data });
      })
      .catch((err) => console.log(err));
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleDrawerToggle = () => {
    this.setState((state) => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
  
    const { classes } = this.props;
    const { value, reservationsObject } = this.state;

    const drawer = (
      
      <div>
        <div className={classes.toolbar} />
        <Divider />

        <List
          className={classes.drawerList}
          style={{
            fontFamily: "Roboto",
            color: "#545454",
            fontSize: "18px",
          }}
        >
          <Avatar
            width="200"
            src={
              !this.state.photo
                ? "https://us.123rf.com/450wm/gmast3r/gmast3r1411/gmast3r141100350/33865095-businessman-profile-icon-male-portrait-flat.jpg?ver=6"
                : this.state.photo
            }
            className={classes.large}
          />
          <h3 style={{ textAlign: "center" }}>
            Welcome back, {this.state.firstname}!
          </h3>
        </List>
      </div>
    );
    return (
      <div>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar position="fixed" className={classes.appBar} elevation={0}>
            <Nav1 />
          </AppBar>

          <nav className={classes.drawer}>
            <Hidden smUp implementation="css">
              <Drawer
                container={this.props.container}
                variant="temporary"
                open={this.state.mobileOpen}
                onClose={this.handleDrawerToggle}
                classes={{
                  paper: classes.drawerPaper,
                }}
              >
                {drawer}
              </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
              <Drawer
                classes={{
                  paper: classes.drawerPaper,
                }}
                variant="permanent"
                open
              >
                {drawer}
              </Drawer>
            </Hidden>
          </nav>
          <main className={classes.content}>
            <div className={classes.toolbar} />

            <div>
              <div className={classes.root}>
                <Grid container spacing={0}>
                  <Grid item xs={12}>
                    {/* //Begin Tabs Menu// */}
                    <Paper className={classes.tabs} square={true} elevation={0}>
                      <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                        variant="fullWidth"
                      >
                        <Tab label="List of Your Parking Areas" />
                      </Tabs>
                    </Paper>
                    {/* End Tabs Menu// */}

                    <div>
                      <Paper className={classes.paper} elevation={0}>
                        <div>
                          <h1>MY PARKINGS</h1>
                          <div className={classes.cardContainer}>
                            {this.state.listing.map((listing) => {
                              if (listing.user === this.state.userId) {
                                return (
                                  <div>
                                    <Ownerscard
                                      loadListings={this.loadListings}
                                      key={listing._id}
                                      id={listing._id}
                                      title={listing.title}
                                      photo={listing.photo}
                                      address={listing.address}
                                      earning={listing.earning}
                                      earnings={listing.earnings}
                                      city={listing.city}
                                      state={listing.state}
                                      zipcode={listing.zipcode}
                                      handleEditListing={this.handleEditListing}
                                      handleAvailListing={
                                        this.handleAvailListing
                                      }
                                    />
                                  </div>
                                );
                              }
                            })}
                          </div>
                        </div>
                      </Paper>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </div>
          </main>
       
          <Feedback />
        </div>
      </div>
      
    );
    
  }

}
SearchResult1.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchResult1);
