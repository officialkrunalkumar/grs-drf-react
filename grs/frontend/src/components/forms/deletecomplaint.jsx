import React from 'react';
import { useParams } from "react-router-dom";
import { Redirect } from 'react-router';

const Delete = () => {
    const {id} = useParams();
    console.log(id);
    return (
        <div>
            <Redirect exact to="/complaint"/>
        </div>
    )
}
export default Delete;