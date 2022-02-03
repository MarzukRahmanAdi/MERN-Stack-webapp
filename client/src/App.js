import React , {useEffect , useState} from 'react'
import { Container , AppBar , Typography , Grow , Grid, useMediaQuery, useTheme} from "@material-ui/core"
import memories from "./imgs/memories.jpg"
import Posts from './components/posts/Posts';
import Form from './components/form/Form';
import useStyles from './styles';
import { useDispatch } from 'react-redux'
import {getPosts} from './actions/posts'

const App = () =>{
    const classes = useStyles();
    const dispatch = useDispatch();
    const [currentId , setCurrentId] = useState(null)
    const theme = useTheme();
    const ismobile = useMediaQuery(theme.breakpoints.down("md"))             

    useEffect(()=>{
        dispatch(getPosts());    
    }, [  dispatch ])


    return(
        <Container maxWidth="lg">
                <AppBar className={classes.appBar} position="static" color="inherit">
                    <Typography className={classes.heading} variant={ismobile ? "h5" : "h3"} style={{paddingTop : "2px" , paddingBottom: "2px"}} align="center">Share Memories</Typography>
                </AppBar>
                <Grow in>
                    <Container>
                        <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={4}>
                            <Grid item xs={12} sm={7}> 
                                <Posts setCurrentId={setCurrentId} />                                
                            </Grid>
                            <Grid item xs={12} sm={4}> 
                                <Form currentId={currentId} setCurrentId={setCurrentId} />
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
        </Container>
    );
}
export default App;