import React, { Component } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Button,
  Container,
  Card,
  CardContent,
  CardActions,
  Typography
} from "@material-ui/core/";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    marginTop: "5vh",
    padding: "12px"
  },
  input: {
    width: "100%",
    margin: "4px 0"
  },
  title: {
    marginBottom: "10px"
  }
});

class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    // Here you'd send the data to the backend
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.lastStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio },
      classes
    } = this.props;

    return (
      <Container maxWidth="sm">
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h4" className={classes.title}>
              Confirm Info
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Fist Name" secondary={firstName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Last Name" secondary={lastName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email" secondary={email} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Occupation" secondary={occupation} />
              </ListItem>
              <ListItem>
                <ListItemText primary="City" secondary={city} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Bio" secondary={bio} />
              </ListItem>
            </List>
            <CardActions>
              <Button variant="contained" color="default" onClick={this.back}>
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={this.continue}
              >
                Confirm
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </Container>
    );
  }
}

export default withStyles(styles)(FormUserDetails);
