import React from "react";
import '../index.css';
import { useState} from "react";
import { Container, Typography } from "@mui/material";

// controlled inputs are a way of setting up input fields in forms
// so that we can track their values
// Text input field - user can type into it,
// store what they typed in state variable
// if state changes it updates what we see in input field
// always keep input field and state in sync with each other.
// 

function CreateForm() {
    // label - for first field
    // following state variables track userInput so we can do something with it
    // associate value of following state variables with values of input fields
    // this makes whatever the value of the variables show up in the input field
    // onchange event - when we change text in input field, it calls setFunctions to update value of state variables
    // event.target.value -> event is typing into field, target is input element, value is whatever we typed
    // when a button is pressed inside a form it fires a submit event (onSubmit) on the form itself
    // can listen for the submit event and react to it

    const [name, setName] = useState("");
    const [duration, setDuration] = useState("");
    const [date, setDate] = useState("");

    // first thing to do on submit - stop default action of form being submitted
    // which is page refreshing
    const handleSubmit = (e) => {
        e.preventDefault();
        // want to create a newworkout object
        // this will ultimately be saved to DB
        // create an object consisting of the current values of the state variables
        const newWorkout = {name, duration, date};
        // send post request to server to save newWorkout to DB
        // fetch is asynchronous, returns a promise so we tack on a then
        fetch("/api/workouts", {
            method: "POST",
            // tells server we are sending json data
            headers: {"Content-Type": "application/json"},
            // actual data we are sending, in JSON form
            body: JSON.stringify(newWorkout)
        }).then(() => {
            setName("");
            setDuration("");
            setDate("");
        })
    };

    return (
        <Container>
            <Typography variant="h4">Add a New Workout</Typography>
            <form onSubmit={handleSubmit}>
                <label className="create">Workout Name: </label>
                <input 
                type="text"
                required
                className="create"
                value={name}
                onChange={(event) => setName(event.target.value)}
                />
                <br />
                <label className="create">Workout Duration in Minutes: </label>
                <input 
                type="text"
                required
                className="create"
                value={duration}
                onChange={(event) => setDuration(event.target.value)}
                />
                <br />
                <label className="create">Workout Date: </label>
                <input 
                type="text"
                required
                className="create"
                value={date}
                onChange={(event) => setDate(event.target.value)}
                />
                <br />
                <button>Add Workout</button>
            </form>
        </Container>
    );
}

export default CreateForm;