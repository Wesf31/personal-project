import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import App1 from './../Appointment/app1'
import './NavBar.css'

class NavBar extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.container}>
        <Button component={Link} to="/" label="Home" />
        <Button href={process.env.REACT_APP_LOGIN} />
        <Button component={Link} to="/gallery" label="Gallery" />
        <App1 />
      </div>
    )
  }
}

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
});
export default withStyles(styles)(NavBar)