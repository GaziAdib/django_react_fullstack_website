import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useParams, useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const StudentDetail = () => {

const [student, setSetudent] = useState([])

const {id} = useParams();
const history = useHistory();

useEffect(() => {
    getSingleStudent();
},[])


const getSingleStudent = async () => {
  const  { data } = await axios.get(`http://127.0.0.1:8000/api/${id}/`)
  console.log(data);
  setSetudent(data);
  

}

const deleteUser = async (id) => {
    await axios.delete(`http://127.0.0.1:8000/api/${id}/`)
    history.push("/")
}



    return (
        <div>
            <h2>Detail of Single Students </h2>
            <hr></hr>
            <div className="full-student-detail">
                <img src={student.image} height="300" width="500"/>
                <div className="student-detail">
                    <p>{student.id}</p>
                    <p>{student.name}</p>
                    <p>{student.email}</p>
                    <p>{student.phone}</p>
                    <p>{student.address}</p>
                </div> 
            </div>
           

          

            <Link className="btn btn-outline-primary mr-2" to={`/${student.id}/update`}>Update</Link>
            <Link className="btn btn-danger" onClick={() => deleteUser(student.id)}>Delete</Link>
        </div>
    );
};

export default StudentDetail;