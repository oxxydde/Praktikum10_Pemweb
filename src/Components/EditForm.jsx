import React, { useState } from "react";
import './EditForm.css';

export default function EditForm(props) {
    const [firstName, setFirstName] = useState(props.firstName);
    const [lastName, setLastName] = useState(props.lastName);
    const [age, setAge] = useState(props.age);
    const [refFirstName, refLastName, refAge] = props.refs;
    return (
        <div className="edit-container">
            <h3>Edit Data</h3>
            <span>First Name</span>
            <input type="text" className="textfield" name="first" id="first" value={firstName} onChange={
                e => setFirstName(e.target.value)
            }
            ref={ refFirstName }
            />
            <span>Last Name</span>
            <input type="text" className="textfield" name="last" id="last" value={lastName} onChange={
                e => setLastName(e.target.value)
            }
            ref={ refLastName }
            />
            <span>Age</span>
            <input type="text" className="textfield" name="age" id="age" value={age} onChange={
                e => setAge(e.target.value)
            }
            ref={ refAge }
            />
            <div className="confirm-btns" >
                <input type="button" className="edit-action-btn" id="update-confirm" value="Edit" onClick={props.onConfirmClick}/>
                <input type="button" className="edit-action-btn" id="cancel-confirm" value="Cancel" onClick={props.onCancelClick}/>
            </ div>
        </div>
    );
}