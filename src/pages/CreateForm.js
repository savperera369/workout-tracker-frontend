import React from "react";
import '../index.css';
import { Button, Container, Typography } from "@mui/material";

// controlled inputs are a way of setting up input fields in forms
// so that we can track their values
// Text input field - user can type into it,
// store what they typed in state variable
// if state changes it updates what we see in input field
// always keep input field and state in sync with each other.
// 

function CreateForm() {
    // label - for first field
    return (
        <Container>
            <Typography variant="h4">Add a New Workout</Typography>
            <form>
                <label className="create">Workout Name: </label>
                <input 
                type="text"
                required
                className="create"
                />
                <br />
                <label className="create">Workout Duration: </label>
                <input 
                type="text"
                required
                className="create"
                />
                <br />
                <label className="create">Workout Date: </label>
                <input 
                type="text"
                required
                className="create"
                />
                <br />
                <Button variant="contained">Add Workout</Button>
            </form>
        </Container>
    );
}

export default CreateForm;