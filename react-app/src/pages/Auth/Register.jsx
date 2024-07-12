import React,{useState} from "react";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
import "../../styles/AuthStyles.css";
const Register = () => {
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[phone, setPhone] = useState("");
    const[address, setAddress] = useState("");
    const[answer, setAnswer] = useState("");
    
    const navigate = useNavigate();

    //form function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
          const res= await axios.post("http://localhost:8080/api/v1/auth/register",
            {name,email,password,phone,address,answer}
          );
          if(res.data.success){
            toast.success("Registration Successfull");
            navigate("/login");
          }else {
            toast.error(res.data.message);
          }
        } catch (error){
          console.log(error);
          toast.error("Something went wrong");
        }
    };
  return (
   <Layout title="register">
   <div className="form-container">
<form onSubmit={handleSubmit}>
   <h3> REGISTER FORM</h3>
  <div className="mb-3">
    <input
     type="text"
    value={name}
    onChange={(e) => setName(e.target.value)}
     className="form-control"
     id="exampleInputName" 
     placeholder="Enter your Name"
     required
     autoFocus
     />
    </div>
    <div className="mb-3">
    <input type="email"
     value={email}
     onChange={(e) => setEmail(e.target.value)}
     className="form-control" 
     id="exampleInputEmail1" 
     placeholder='Enter your Email '
     required
    />
    </div>
  <div className="mb-3">
    <input 
    type="password" 
     value={password}
     onChange={(e) => setPassword(e.target.value)}
    className="form-control"
     id="exampleInputPassword"
     placeholder="Enter your Password"
     required
     />
  </div>
  <div 
  className="mb-3">
    <input 
    type="text"
     value={phone}
     onChange={(e) => setPhone(e.target.value)}
     className="form-control"
      id="exampleInputPhone"
      placeholder="Enter your Phone"
      required
     />
    </div>
    <div className="mb-3">
    <input
     type="text"
     value={address}
     onChange={(e) => setAddress(e.target.value)}
     className="form-control" 
     id="exampleInputAddress" 
     placeholder="Enter your Address"
     required 
     />
    </div>
    <div className="mb-3">
    <input
     type="text"
     value={answer}
     onChange={(e) => setAnswer(e.target.value)}
     className="form-control" 
     id="exampleInputAnswer" 
     placeholder="What is your girlfriend's name ?"
     required 
     />
    </div>
  
  <button type="submit" className="btn btn-primary">
    REGISTER
  </button>
</form>
   </div>
   </Layout>
  );
};

export default Register;
