import React, { Component } from "react";
import {
  TextField,
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
    marginBottom: '10px'
  }
});

class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.lastStep();
  };

  render() {
    const { values, classes } = this.props;

    return (
      <Container maxWidth="sm">
        <Card className={classes.root}>
          <CardContent>
          <Typography variant="h4" className={classes.title}>
              Personal Details
            </Typography>
            <TextField
              label="Occupation"
              onChange={this.props.handleChange("occupation")}
              defaultValue={values.occupation}
              variant="outlined"
              className={classes.input}
            />
            <TextField
              label="City"
              onChange={this.props.handleChange("city")}
              defaultValue={values.city}
              variant="outlined"
              className={classes.input}
            />
            <TextField
              label="Bio"
              onChange={this.props.handleChange("bio")}
              defaultValue={values.bio}
              variant="outlined"
              className={classes.input}
            />
            <CardActions>
              <Button variant="contained" color="default" onClick={this.back}>
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={this.continue}
              >
                Continue
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </Container>
    );
  }
}

export default withStyles(styles)(FormPersonalDetails);
