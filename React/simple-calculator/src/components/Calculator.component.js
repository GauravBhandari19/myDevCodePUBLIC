import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }));

class Calculator extends React.Component
{
    render()
    {
        return (
            <Grid container className="test">
                <Grid>
                    <Grid>
                        <Grid>
                        <Paper className="paper" />
                        </Grid>
                    
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default  Calculator;