import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import "./style.css";
// Material UI App Bar Imports
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// import MenuIcon from "@material-ui/icons/Menu";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { withTheme } from "@material-ui/core/styles";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class Nav1 extends Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
    this.state = {
      redirect: false,
      user: {}
    };
  }

  componentDidMount() {
    this.userInfo().then(response =>
      this.setState(
        {
          user: response.data.user
        },
        () => this.tester()
      )
    );
  }

  tester() {
    console.log(this.state.user);
  }

  userInfo() {
    return axios.get("/user/");
  }

  logout(event) {
    event.preventDefault();
    console.log("logging out");
    axios
      .post("/user/logout")
      .then(response => {
        console.log(response.data);
        this.setState({ redirect: true });
      })
      .catch(error => {
        console.log("Logout error");
      });
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/signin" />;
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar
          position="static"
          style={{
            background: "#B6CECC"
          }}
          elevation={1}
        >
          <Toolbar
            style={{
              fontFamily: this.props.theme.typography.navFont
            }}
          >
            <Typography
              variant="h6"
              color="secondary"
              className={classes.grow}
              style={{ fontFamily: "Galada", fontSize: "34px" }}
            >
              <a href="/searchresult1">Parking Click</a>
            </Typography>
            <Button color="secondary" href="/searchresult1">
              Profile
            </Button>
            <Button color="secondary" href="/addparking">
              Add Parking
            </Button>
            {this.renderRedirect()}

            <Button
              color="secondary"
              title="Logout"
              onClick={this.logout}
              href="/signin"
            >
              <ExitToAppIcon />
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Nav1.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withTheme()(Nav1));
