import { NavLink } from "react-router-dom";
import React from 'react';

const ComplaintD = ({data, deleteComplaint}) => {
    return (
        <div>
            <table className="table table-lg">
              <tr>
                <td>{data.title}</td>
                <td>{data.name}</td>
                <td>{data.complaint_for}</td>
                <td>{data.complaint_to}</td>
                <td>{data.cohort}</td>
                <td>{data.level}</td>
                <td>{data.description}</td>
                <td>{data.category}</td>
                <td>{data.user_role}</td>
                <td>
                <NavLink className="btn btn-outline-danger m-2" exact to={`/edit-complaint/${parseInt(data.id)}`}>
                    <i className="fa fa-pencil"></i>
                </NavLink>
                </td>
                <td>
                <button className="btn btn-outline-danger m-2" onClick={() => deleteComplaint(data.id)}>
                    <i className="fa fa-trash"></i>
                </button>
                </td>
              </tr>
            </table>
          </div>
    )
}


export default ComplaintD;
