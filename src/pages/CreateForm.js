import React from "react";
import '../index.css';

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
        <div>
            <h2>Add a new workout</h2>
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
                <button>Add Workout</button>
            </form>
        </div>
    );
}

export default CreateForm;