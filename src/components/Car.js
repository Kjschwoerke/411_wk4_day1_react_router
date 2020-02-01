import React from 'react'
import cars from '../cars.json'
//import material ui components here
// Container, Paper, Chip //
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },
  }));

  
    
 

const Car = (props) => {
    const classes = useStyles();
    let id = props.match.params.id
    console.log(JSON.stringify(cars[id - 1]) + "this is the id")
    let car = cars[id - 1]
    console.log(car.id , car.Name, car.Cylinders)
    return (
    <div className={classes.root} id="Car_Container">
        <Container id="Container" maxWidth = {false}>
        <Paper id="Paper" elevation={3}>
        <h1>{car.Name}</h1>
        <Chip size="small" label={`Id: ${car.id}`} />
        <Chip size="small" label={`Name: ${car.Name}`} />
        <Chip size="small" label={`Miles per Gallon: ${car.Miles_per_Gallon}`} />
        <Chip size="small" label={`Cylinders: ${car.Cylinders}`} />
        <Chip size="small" label={`Displacement: ${car.Displacement}`} />
        <Chip size="small" label={`Horsepower: ${car.Horsepower}`} />
        <Chip size="small" label={`Weight in lbs: ${car.Weight_in_lbs}`} />
        <Chip size="small" label={`Acceleration: ${car.Acceleration}`} />
        <Chip size="small" label={`Year: ${car.Year}`} />
        <Chip size="small" label={`Origin: ${car.Origin}`} />
        </Paper>
        </Container>
    </div>
    )
    
}

export default Car