import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import SocialLogIn from "../shared/socialLogIn/SocialLogIn";
import { useForm } from "react-hook-form";

const Login = () => {
  const { user, signIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [show, setShow] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // Login user
    signIn(email, password)
      .then((result) => {
        setSuccess("User login successful!!!");
        form.reset();
        navigate(from, { replace: true });
        const user = result.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  const onSubmit = (data) => {
    // Login user
    signIn(data.email, data.password)
      .then((result) => {
        setSuccess("User login successful!!!");
        reset();
        navigate(from, { replace: true });
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <>
      <Helmet>
        <title>Summer camp yoga || Login</title>
      </Helmet>
      <div className="flex justify-center items-center h-screen bg-gray-">
        <div className="w-96 rounded-xl shadow-lg p-6 bg-white">
          <h1 className="text-2xl font-bold mb-6 text-center text-indigo-500">
            Login
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label
                className="block text-gray-700 font-bold"
                htmlFor="password"
              >
                Email
              </label>
              <input
                type="text"
                {...register("email", { required: true })}
                name="email"
                placeholder="Email..."
                className="input input-bordered h-8 mb-2"
                aria-invalid={errors.name ? "true" : "false"}
              />
              {errors.email?.type === "required" && (
                <p className="text-red-600 text-xs mt-" role="alert">
                  Email is required
                </p>
              )}
            </div>
            <div className="form-control">
              <label
                className="block text-gray-700 font-bold"
                htmlFor="password"
              >
                Password
              </label>

              <input
                type={show ? "text" : "password"}
                name="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                })}
                placeholder="Password..."
                className="input input-bordered h-8"
                aria-invalid={errors.password ? "true" : "false"}
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600 text-xs mt-1 italic" role="alert">
                  Password is required
                </p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600 text-xs mt-1 italic" role="alert">
                  Password should be at least 6 chars.
                </p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-600 text-xs mt-1 italic" role="alert">
                  Password max length is 20 chars.
                </p>
              )}
              <p
                className="text-indigo-500 font-bold italic mt-2"
                onClick={() => setShow(!show)}
              >
                <small>
                  {show ? (
                    <span className="cursor-pointer">Hide Password</span>
                  ) : (
                    <span className="cursor-pointer">Show Password</span>
                  )}
                </small>
              </p>
            </div>
            <label className="label">
              <div className="label-text-alt link link-hover my-2">
                <Link className="text-indigo-500" to="/signUp">
                  <span className="text-indigo-500">
                    <i> New to this site ? </i>
                  </span>
                  <span className="text-indigo-500">
                    <i> Create New Account </i>
                  </span>
                </Link>
              </div>
            </label>
            <div className="w-full">
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="submit"
              >
                Log In
              </button>
            </div>
            <div className="my-2">
              <p>
                {success && (
                  <span>
                    <i className="text-bold text-green-600">{success}</i>
                  </span>
                )}
              </p>
              <p>
                {error && (
                  <span>
                    <i className="text-bold text-red-600">{error}</i>
                  </span>
                )}
              </p>
            </div>
            <div className="flex items-center justify-between my-1">
              <span> ----------------- </span>
              <span>OR</span>
              <span> ----------------- </span>
            </div>
            <div className="w-full">
              <span className="flex items-center justify-center text-indigo-500">
                <small>
                  <i>Sign in with Google</i>
                </small>
              </span>
              <SocialLogIn />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
