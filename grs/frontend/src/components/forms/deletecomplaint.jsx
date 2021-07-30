import React from 'react';
import { useParams } from "react-router-dom";
import { Redirect } from 'react-router';

const Delete = () => {
    const {id} = useParams();
    console.log(id);
    return (
        <div>
            <Redirect exact to="/"/>
        </div>
    )
}
export default Delete;