import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Ball from "../assets/ball.png";
import {
  CardMedia,
  FilledInput,
  IconButton,
  Input,
  InputAdornment,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons/Visibility";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    background: "linear-gradient(148.89deg, #77AFE4 -2.18%, #3C8DD9 99.01%)",

    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(4),
  },

  media: {
    height: 450,
    width: 500,
  },
  herosection: {
    color: "white",
  },
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={12} md={7} className={classes.image}>
        <Grid item xs={12} sm={false}>
          <CardMedia className={classes.media} image={Ball} title="Football" />
        </Grid>

        {/* <Grid item xs={12} sm={false} style={{display:"flex", justifyContent:"center"}}>

        <Typography component="h3" variant="h3"className={classes.herosection} >
        Let’s Climb the Highest <br/>Ranking in Your City.
          </Typography>
        </Grid>
    

        <Grid item xs={12} sm={false} style={{display:"flex", justifyContent:"center", marginRight:"70px"}}>

          <Typography component="h3" variant="subtitle1"  className={classes.herosection}>
          Explore the game that will make you a superstars <br/>amongs thousands of players in your city. Awesome <br/> game, awesome you!
          </Typography>
          
        </Grid> */}

        <Grid
          container
          direction="column"
          justify="center"
          alignItems="flex-start"
          style={{ marginLeft: "60px" }}
        >
          <Grid item>
            <Typography
              component="h3"
              variant="h3"
              className={classes.herosection}
            >
              Let’s Climb the Highest <br />
              Ranking in Your City.
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              component="h3"
              variant="subtitle1"
              className={classes.herosection}
            >
              Explore the game that will make you a superstars <br />
              amongs thousands of players in your city. Awesome <br /> game,
              awesome you!
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>IMINN</Avatar>
          <Typography component="h5" variant="subtitle1" gutterBottom>
            Welcome back to IMINN!
          </Typography>
          <Typography component="h3" variant="h3">
            Let’s Login!
          </Typography>
          <form className={classes.form} noValidate>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              spacing={5}
            >
              <Grid item>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Enter your email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
              </Grid>
              <Grid item>
                <TextField
                  margin="normal"
                  fullWidth
                  name="password"
                  label="Enter your password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<RadioButtonUncheckedIcon />}
                      checkedIcon={<CheckCircleOutlineIcon />}
                      value="remember"
                      color="primary"
                    />
                  }
                  label="Remember my credentials"
                />
              </Grid>
              <Grid item>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Log In
                </Button>
              </Grid>
            </Grid>

            <Box mt={20} style={{ display: "flex", justifyContent: "center" }}>
              Don't have an account?
              <Link href="#" variant="body2">
                {" Sign Up"}
              </Link>
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
