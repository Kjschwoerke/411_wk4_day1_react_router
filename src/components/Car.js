import React from 'react'
import cars from '../cars.json'
// import material ui components here //
// Container, Paper, Chip //

const Car = (props) => {
    let id = props.match.params.id
    console.log(JSON.stringify(cars[id - 1]) + "this is the id")
    let car = cars[id - 1]
    console.log(car.id , car.Name, car.Cylinders)
    return (
    <>
    <h1>{car.Name}</h1>
    <p>Cylinders: {car.Cylinders}</p>
    <p>Displacement: {car.Displacement}</p>
    <p>Miles Per Gallon: {car.Miles_per_Gallon}</p>
    <p>Horsepower: {car.Horsepower}</p>
    <p>Model Year: {car.Year}</p>
    <p>Origin: {car.Origin}</p>
    </>
    )
    
}

export default Car