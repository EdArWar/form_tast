import React, { useState } from "react";
import AuthApi from "../../API/AuthApi";
import warning_icon from "../../assets/images/warning_icon.png";
import "./Form.css";

const Form = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const onFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onReset = () => {
    setFullName("");
    setEmail("");
    setErrorMessage("");
  };

  const onSubmitted = () => {
    AuthApi.login(fullName, email, setErrorMessage);
  };

  return (
    <div className="form_container">
      <div className="input_block">
        <label htmlFor="fullName" className="label_text">
          FullName
        </label>
        <input
          type="text"
          id="fullName"
          placeholder="FullName"
          value={fullName}
          onChange={onFullNameChange}
        />
        <div
          className="warning_text"
          style={{ visibility: errorMessage ? "unset" : "hidden" }}
        >
          <div className="warning_icon">
            <img srcSet={warning_icon} width="auto" alt="" />
          </div>
          <span>Full name is in wrong format</span>
        </div>
      </div>
      <div className="input_block">
        <label htmlFor="email" className="label_text">
          Email
        </label>
        <input
          type="email"
          id="fullName"
          placeholder="Email"
          value={email}
          onChange={onEmailChange}
        />
        <div
          className="warning_text"
          style={{ visibility: errorMessage ? "unset" : "hidden" }}
        >
          <div className="warning_icon">
            <img srcSet={warning_icon} width="auto" alt="" />
          </div>
          <span>Email is invalid or not exist</span>;
        </div>
      </div>
      <div className="buttons">
        <button className="reset_button" onClick={onReset}>
          Reset
        </button>
        <button className="submit_button" onClick={onSubmitted}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Form;
