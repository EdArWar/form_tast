import React from "react";
import warning_icon from "../../assets/images/warning_icon.png";
import "./Form.css";

const Form = () => {
  return (
    <div className="form_container">
      <div className="input_block">
        <label htmlFor="fullName" className="label_text">
          FullName
        </label>
        <input type="text" id="fullName" placeholder="FullName" />
        <div
          className="warning_text"
          style={{ marginBottom: "28px", marginTop: "10px" }}
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
        <input type="email" id="fullName" placeholder="Email" />
        <div
          className="warning_text"
          style={{ marginBottom: "28px", marginTop: "10px" }}
        >
          <div className="warning_icon">
            <img srcSet={warning_icon} width="auto" alt="" />
          </div>
          <span>Email is invalid or not exist</span>;
        </div>
      </div>
      <div className="buttons">
        <button className="reset_button">Reset</button>
        <button className="submit_button">Submit</button>
      </div>
    </div>
  );
};

export default Form;
