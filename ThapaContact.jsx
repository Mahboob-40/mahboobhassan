import React, { useState } from "react";

const Contact = () =>{
    const [data, setData] = useState({
        fullname : "",
        email : "",
        password : "",
    });

    const inputEvent = (event) =>{
        const {name , value} = event.target;
        setData((preval)=>{
            return{
                ...preval,
                [name] : value,
            }
        })
    }
    const formSubmit = (e) =>{
        e.preventDefault();
        alert(`My name is ${data.fullname}. My email address is ${data.email} and email password is ${data.password}`);
    }
    return(
        <>
            <div className="my-5">
                <h1 className="text-center"> Contact Us </h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-5 col-10 mx-auto mb-3">
                    <form onSubmit={formSubmit}>
                    <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Full Name</label>
    <input type="text" className="form-control" name="fullname"  value={data.fullname} onChange={inputEvent} id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your name with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" name="email"  value={data.email} onChange={inputEvent} id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name="password"  value={data.password} onChange={inputEvent} id="exampleInputPassword1" />
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input"  id="exampleCheck1" />
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;