import React,{useState} from 'react'
import { Form } from 'react-bootstrap';
import NavbarBase from '../NavbarBase';
import '../../static/main.css';
import Footer from '../footer';
import { useHistory } from "react-router-dom";

const Createcomplaint = (props) => {
    const initComplaint = {
        id: null,
        title: "",
        name: "",
        complaint_for: "",
        complaint_to: "",
        cohort: "",
        level: "",
        description: "",
        category: "",
        user_role: ""
    }
    const history = useHistory();
    const [complaint, setComplaint] = useState(initComplaint);

    const handleChange = e => {
        const {name, value} = e.target;
        setComplaint({...complaint, [name]: value});
    }

    const handleSubmit = e => {
        console.log('handle cliked');
        e.preventDefault();
        if (complaint.title && complaint.name && complaint.description && complaint.complaint_for && complaint.complaint_to && complaint.level && complaint.category && complaint.cohort && complaint.user_role) {
           handleChange(e);
           props.createComplaint(complaint);
           let path = `/complaint`;
           history.push(path);
        }
        else{
            var text="Please fill all the data.";
            document.getElementById("validity").innerHTML = text;
            document.getElementById("validity").style.color = "red";
        }
    }
    return (
        <>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
         <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet" />
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
        <div id="home">
        <NavbarBase />
        <div id="krunal">
        <div className="container h-100" />
        <div className="d-flex justify-content-center h-100" />
            <div className="row mt-5">
                <Form className="col-md-6 mx-auto">
                <h2 className="mt-2 mb-5">Add Complaint</h2>
                <Form.Group controlId="title" className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name="title" value={complaint.title} placeholder="Complaint in Brief" onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId="name" className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" value={complaint.name} placeholder="Your Name" onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId="complaint_for" className="mb-3">
                    <Form.Label>Complaint For</Form.Label>
                    <Form.Control as="select" name="complaint_for" value={complaint.complaint_for} onChange={handleChange}>
                        <Form.Control as="option"> Select </Form.Control>
                        <Form.Control as="option" value="G">General</Form.Control>
                        <Form.Control as="option" value="M">Management</Form.Control>
                        <Form.Control as="option" value="E">Education</Form.Control>
                        <Form.Control as="option" value="D">Deployment</Form.Control>
                        <Form.Control as="option" value="S">Salary</Form.Control>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="complaint_to" className="mb-3">
                    <Form.Label>Complaint To</Form.Label>
                    <Form.Control as="select" name="complaint_to" value={complaint.complaint_to} onChange={handleChange}>
                        <Form.Control as="option"> Select </Form.Control>
                        <Form.Control as="option" value="M">Mentor</Form.Control>
                        <Form.Control as="option" value="A">Admin</Form.Control>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="cohort" className="mb-3">
                    <Form.Label>Cohort</Form.Label>
                    <Form.Control as="select" name="cohort" value={complaint.cohort} onChange={handleChange}>
                        <Form.Control as="option"> Select </Form.Control>
                        <Form.Control as="option" value="U">Unknown</Form.Control>
                        <Form.Control as="option" value="P">Python</Form.Control>
                        <Form.Control as="option" value="J">Java</Form.Control>
                        <Form.Control as="option" value="R">React</Form.Control>
                        <Form.Control as="option" value="A">Android</Form.Control>
                        <Form.Control as="option" value="L">Linux</Form.Control>
                        <Form.Control as="option" value="C">Cybersecurity</Form.Control>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="level" className="mb-3">
                    <Form.Label>Level</Form.Label>
                    <Form.Control as="select" name="level" value={complaint.level} onChange={handleChange}>
                        <Form.Control as="option"> Select </Form.Control>
                        <Form.Control as="option" value="I">Individual</Form.Control>
                        <Form.Control as="option" value="G">General</Form.Control>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="textarea" className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" name="description" value={complaint.description} placeholder="Describe Your Complaint" rows={3} onChange={handleChange} />
                    <p id="valid" className="text-right"></p>
                </Form.Group>
                <Form.Group controlId="category" className="mb-3">
                    <Form.Label>Category</Form.Label>
                    <Form.Control as="select" name="category" value={complaint.category} onChange={handleChange}>
                        <Form.Control as="option"> Select </Form.Control>    
                        <Form.Control as="option" value="I">Identifiable</Form.Control>
                        <Form.Control as="option" value="A">Anonymous</Form.Control>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="user_role" className="mb-3">
                    <Form.Label>User Role</Form.Label>
                    <Form.Control as="select" name="user_role" value={complaint.user_role} onChange={handleChange}>
                        <Form.Control as="option"> Select </Form.Control>
                        <Form.Control as="option" value="T">Trainee</Form.Control>
                        <Form.Control as="option" value="M">Mentor</Form.Control>
                    </Form.Control>
                </Form.Group>
                <p id="validity"></p>
                <div className="d-flex justify-content-center mt-3 login_container">
                <button className="btn btn-outline-success my-3 mx-auto" onClick={handleSubmit} type="submit">Submit</button>
                </div>
                </Form>
            </div>
            </div>
            <Footer />
        </div>
        </>
    )
}

export default Createcomplaint;
