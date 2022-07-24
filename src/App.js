import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import desktopProduct from "./images/image-product-desktop.jpg";
import mobileProduct from "./images/image-product-mobile.jpg";
import cart from "./images/icon-cart.svg";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    height: "100vh",
    width: "auto",
    background: "hsl(30, 38%, 92%)",
    margin: 0,
    padding: 0,
  },
  card: {
    display: "flex",
    height: "50%",
    width: "37%",
    borderRadius: 10,
    [theme.breakpoints.down("sm")]: {
      width: "95%",
      height: "80%",
      flexDirection: "column",
    },
  },
  heading: {
    fontFamily: "Fraunces",
    fontWeight: 700,
    fontSize: "2em",
  },
  title: {
    fontFamily: "Montserrat",
    fontSize: "14px",
    fontWeight: 500,
    textTransform: "Uppercase",
    color: "hsl(228, 12%, 48%)",
    marginTop: "0.5em",
    marginBottom: "2em",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0.5em",
    },
  },
  paragraph: {
    fontFamily: "Montserrat",
    fontSize: "14px",
    fontWeight: 500,
    color: "hsl(228, 12%, 48%)",
    marginTop: "2em",
    marginBottom: "2em",
    /*  textAlign: "justify", */
    [theme.breakpoints.down("sm")]: {
      fontSize: "13px",
    },
  },
  activePrice: {
    fontFamily: "Fraunces",
    fontWeight: 700,
    fontSize: "2.5em",
    color: "hsl(158, 36%, 37%)",
  },
  inActivePrice: {
    fontFamily: "Montserrat",
    fontSize: "14px",
    fontWeight: 500,
    textDecoration: "line-through",
    color: "hsl(228, 12%, 48%)",
    marginLeft: "2em",
  },
  btn: {
    background: "hsl(158, 36%, 37%)",
    color: "hsl(0, 0%, 100%)",
    textTransform: "none",
    fontSize: "0.8rem",
    fontFamily: "Fraunces",
    fontWeight: 100,
    height: 45,
    width: 245,
    borderRadius: 8,
    "&:hover": {
      background: "hsl(158, 36%, 37%)",
    },
    [theme.breakpoints.down("sm")]: {
      width: 288,
    },
  },
}));

const App = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      className={classes.mainContainer}
    >
      <Card className={classes.card}>
        <CardMedia
          style={{
            width: matchesSM ? "100%" : "50%",
            height: matchesSM ? "45%" : "100%",
          }}
          image={matchesSM ? mobileProduct : desktopProduct}
          title="product"
        />
        <CardContent>
          <Grid
            container
            direction="column"
            alignItems="center"
            style={{ width: matchesSM ? "auto" : "100%" }}
          >
            <Grid
              item
              style={{
                marginLeft: matchesSM ? 0 : "2em",
              }}
            >
              <Typography variant="body1" className={classes.title}>
                perfume
              </Typography>
              <Typography variant="h1" className={classes.heading}>
                Gabrielle {matchesSM ? undefined : <br />}
                Essence Eau De
                {matchesSM ? undefined : <br />} Parfum
              </Typography>
              <Typography variant="body1" className={classes.paragraph}>
                A floral, solar and voluptuous
                {matchesSM ? undefined : <br />} interpretation composed by{" "}
                {matchesSM ? undefined : <br />}
                Olivier Polge, Perfumer-Creator
                {matchesSM ? undefined : <br />} for the House of CHANEL.
              </Typography>
            </Grid>
            <Grid
              item
              container
              alignItems="center"
              style={{
                marginLeft: matchesSM ? 0 : "2em",
                marginBottom: "1em",
              }}
            >
              <Typography variant="body1" className={classes.activePrice}>
                $149.99
              </Typography>
              <Typography variant="body1" className={classes.inActivePrice}>
                $169.99
              </Typography>
            </Grid>
            <Grid item>
              <Button variant="contained" className={classes.btn} disableRipple>
                <img
                  src={cart}
                  alt="icon-cart"
                  style={{ marginRight: "10px" }}
                />
                Add to Cart
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default App;
