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

class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, classes } = this.props;

    return (
      <Container maxWidth="sm">
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h4" className={classes.title}>
              Register
            </Typography>
            <TextField
              label="First Name"
              onChange={this.props.handleChange("firstName")}
              defaultValue={values.firstName}
              variant="outlined"
              className={classes.input}
            />
            <TextField
              label="Last Name"
              onChange={this.props.handleChange("lastName")}
              defaultValue={values.lastName}
              variant="outlined"
              className={classes.input}
            />
            <TextField
              label="Email"
              onChange={this.props.handleChange("email")}
              defaultValue={values.email}
              variant="outlined"
              className={classes.input}
            />
            <CardActions>
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

export default withStyles(styles)(FormUserDetails);
