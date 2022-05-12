import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import ValidationForm from './components/Form/ValidationForm';
import cardImg from './images/credit-card-png-23525.png'
import useStyles from './styles';


const App = () => {
    const classes = useStyles();
    
    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar}  position="static" color="inherit">
                <Typography className ={classes.heading} variant="h2" align="center">Payment Page</Typography>
                <img className={classes.image} src={cardImg} alt="memories" height="60"/> 
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent="center" alignItems="stretch" spacing={5}>                        
                        <Grid item xs={12} sm={4}>
                            <ValidationForm />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;