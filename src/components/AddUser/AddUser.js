import React from 'react'

import './AddUser.css'
import { useState } from "react";
import { addEmployee } from '../api';

const AddUser = () => {

    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [mobile , setMobile] = useState("");
    const [age , setAge] = useState("");
    const [doj , setDoj] = useState("");
    const [salary , setSalary] = useState("");
    const [gender , setGender] = useState("");
    const [password , setPassword] = useState("");

    const onNameChange = (e) => {
        setName(e.target.value);
      };
      const onGenderChange = (e) => {
        setGender(e.target.value);
      };
      const onAgeChange = (e) => {
        setAge(e.target.value);
      };
      const onSalaryChange = (e) => {
        setSalary(e.target.value);
      };
      const onEmailChange = (e) => {
        setEmail(e.target.value);
      };
      const onDojChange = (e) => {
        setDoj(e.target.value);
      };

      const onMobileChange = (e) => {
        setMobile(e.target.value);
      };

      const onPasswordChange = (e) => {
        setPassword(e.target.value);
      };

      const handleAddEmployee = async (e) => {
        e.preventDefault();
        const employee = {
          name,
          gender,
          age,
          salary,
          email,
          doj,
          mobile,
        };

        await addEmployee(employee);
      };
  

    return (

        <div class="center">
        <h2>Add User</h2>
        <form method="post" onSubmit={handleAddEmployee}>
          <div class="txt_field">
            <input type="text" required onChange={onNameChange}/>
            <span></span>
            <label>Username</label>
          </div>
          <div class="txt_field">
            <input type="email" required onChange={onEmailChange}/>
            <span></span>
            <label>Email</label>
          </div>
          <div class="txt_field">
            <input type="number" required onChange={onMobileChange}/>
            <span></span>
            <label>Mobile No</label>
          </div>
          <div class="txt_field">
            <input type="number" required onChange={onAgeChange}/>
            <span></span>
            <label>Age</label>
          </div>
          <div class="txt_field">
            <input type="date" required onChange={onDojChange}/>
            <span></span>
            {/* <label>dd-mm-yyyy</label> */}
          </div>
          <div class="txt_field">
            <input type="number" required onChange={onSalaryChange}/>
            <span></span>
            <label>Salary</label>
          </div>
          <div class="txt_field">
            <input type="gender" required onChange={onGenderChange}/>
            <span></span>
            <label>Gender</label>
          </div>
          <div class="txt_field">
            <input type="password" required onChange={onPasswordChange}/>
            <span></span>
            <label>Password</label>
          </div>
          <input type="submit" value="Add User"/>
          <div class="signup_link">
            
          </div>
        </form>
      </div>

        
        

    )
}

export default AddUser;



