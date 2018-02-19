import React from 'react'
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import './Landing.css'
import NavBar from './../NavBar/NavBar'
import Info from './../Info/Info'
import App1 from './../Appointment/app1'

function Landing(props) {
  const { classes } = props;
  return (
    <div className="landing">
      <NavBar />
      <div className="landingText">
        <div className="text">
          <p className="headerposition">
            Wesley Fukui portfolio website
          </p>
          <p className="textposition">
            This is a simple clean portfolio site for photographers to dispaly thier work and connect with clientele. This website will have an admin login that will allow the photographer to manage the images and bio info.
          </p>
        </div>

        <div className="social">
          <Button
            variant="raised"
            color="primary"
            className={classes.button}
            href="https://www.instagram.com/?hl=en#registered"
            label="Instagram"
          />
          <Button
            variant="raised"
            color="primary"
            className={classes.button}
            href="https://www.instagram.com/?hl=en#registered"
            label="FaceBook"
          />
          <Button
            variant="raised"
            color="primary"
            className={classes.button}
            href="https://www.youtube.com"
            label="YouTube"
          />
        </div>
      </div>
      <Info />
    </div>
  );
}

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

export default withStyles(styles)(Landing)
