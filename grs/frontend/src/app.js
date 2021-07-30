import { useEffect, useState } from "react";
import axios from 'axios';
import Complaint from "./components/Home";
import Createcomplaint from './components/forms/createcomplaint';
import EditComplaint from './components/forms/editcomplaint';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomePage from "./components/homepage";
import Error from "./components/Error";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const [complaints, setComplaints] = useState([]);
  useEffect(()=>{
    loadComplaints();
  },[])

  const loadComplaints = async () => {
    const complaintdata = await axios.get('http://127.0.0.1:8000/complaints/complaint');
    console.log(complaintdata);
    setComplaints(complaintdata.data);
  }
  const updateComplaint = (newComplaint, currentComplaint) => {
    setComplaints(complaints.map(complaint => (complaint.id === currentComplaint.id ? newComplaint : complaint)))
  }

  const createComplaint = complaint => {
    setComplaints([...complaints, complaint]);
  }

  const deleteComplaint = async id => {
    await axios.delete(`http://127.0.0.1:8000/complaints/complaint/${id}`);
    loadComplaints();
  }

  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/login" >
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/complaint">
          <Complaint data={complaints} deleteComplaint={deleteComplaint}/>
        </Route>
        <Route path="/create-complaint">
          <Createcomplaint createComplaint={createComplaint}/>
        </Route>
        <Route path="/edit-complaint/:id">
          <EditComplaint data={complaints} updateComplaint={updateComplaint}/>
        </Route>
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
