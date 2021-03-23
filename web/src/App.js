import './App.css';
import { BasicTable } from './components/table'
import { ButtonAppBar } from "./components//navbar"
import { Example } from "./components//charts"
import { CustomizedTimeline } from './components/timeline'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
function App() {
  return (
    <div className="App">
    
    <ButtonAppBar/>
    <Grid container spacing={1}>
    <Grid item xs={12} sm={6}>
    <BasicTable/>
      </Grid>
        <Grid item xs={12} sm={6}>
        <Typography variant="h4">
        Progress Chart
      </Typography>
        <Example/>
        </Grid>
        </Grid>
        <CustomizedTimeline/>
    </div>
  );
}

export default App;
