import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { register, clearErrors } from "../redux/actions/authAction";
import SpinNow from "../Preloader/SpinNow/SpinNow";
import "./User.css";
const Register = ({ history }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const { name, email, password, password_confirmation } = user;

  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState(
    "/images/default_avatar.jpg"
  );

  const alert = useAlert();
  const dispatch = useDispatch();
  const { success, error, loading } = useSelector(
    (state) => state.userRegistrationReducers
  );
  // console.log(error);
  useEffect(() => {
    if (success) {
      alert.success("Registration Successful");
      history.push("/login");
    }

    if (error) {
      error.map((err) => alert.error(err.msg));
      dispatch(clearErrors());
    }
  }, [dispatch, alert, success, error, history]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      password_confirmation === ""
    ) {
      alert.error("Please fill up all the required filled");
    }
    if (password !== password_confirmation) {
      alert.error("Password Not Matched");
    } else {
      const formData = new FormData();
      formData.set("name", name);
      formData.set("email", email);
      formData.set("password", password);
      formData.set("password_confirmation", password_confirmation);


      dispatch(register(formData));
    }
  };

  const onChange = (e) => {
    
      setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <Fragment>
      {loading ? (
        <SpinNow />
      ) : (
        <div className="row wrapper">
          <div className="col-10 col-lg-5">
            <form
              className="shadow-lg"
              onSubmit={submitHandler}
              encType="multipart/form-data"
            >
              <h3 className="mb-3 text-center">Register</h3>
              <h3
                style={{
                  borderBottom: "3px solid tomato",
                  width: "9rem",
                  margin: "auto",
                }}
              ></h3>

              
              <div className="form-group">
                <label htmlFor="email_field">Name</label>
                <input
                  type="text"
                  id="lastName_field"
                  className="form-control"
                  name="name"
                  value={name}
                  onChange={onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email_field">Email</label>
                <input
                  type="email"
                  id="email_field"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password_field">Password</label>
                <input
                  type="password"
                  id="password_field"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword_field">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword_field"
                  className="form-control"
                  name="password_confirmation"
                  value={password_confirmation}
                  onChange={onChange}
                />
              </div>
              <button
                id="register_button"
                type="submit"
                className="btn btn-block py-3"
                disabled={loading ? true : false}
              >
                REGISTER
              </button>
              <Link to="/login" className="float-right mt-2">
                Have Account? Login
              </Link>
            </form>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Register;
