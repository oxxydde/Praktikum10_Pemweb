import React, { Component } from "react";
import './TableRowList.css';

export default function TableRowList(props) {
    return (
            <tr>
                <td>{props.nums}</td>
                <td>{props.firstName}</td>
                <td>{props.lastName}</td>
                <td>{props.age}</td>
                <td>
                    <button className='action-btn edit-btn' onClick={props.onEditClick}>Edit</button>
                    <button className='action-btn delete-btn' onClick={props.onDeleteClick}>Delete</button>
                </td>
            </tr>
    );
}