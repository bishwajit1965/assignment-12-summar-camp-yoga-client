import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import SocialLogIn from "../shared/socialLogIn/SocialLogIn";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data.password.trim() !== data.confirmPassword.trim()) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Passwords do not match !",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        updateUserProfile(data.name, data.photoUrl)
          .then(() => {
            const saveUser = { name: data.name, email: data.email };
            fetch("http://localhost:5000/users", {
              method: "POST",
              headers: { "content-type": "application/json" },
              body: JSON.stringify(saveUser),
            })
              .then((response) => response.json())
              .then((data) => {
                if (data.insertedId) {
                  reset();
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User profile picture updated !",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  navigate("/");
                }
              });

            console.log("User profile picture updated");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <Helmet>
        <title>Summer camp yoga || Sign up</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
          <h2 className="text-center font-bold text-3xl mt-2 text-indigo-500">
            Sign Up
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <input
                type="text"
                {...register("name", { required: true })}
                name="name"
                placeholder="Name..."
                className="input input-bordered h-8"
                aria-invalid={errors.name ? "true" : "false"}
              />

              {errors.name?.type === "required" && (
                <p className="text-red-600 text-xs mt-" role="alert">
                  Name is required
                </p>
              )}
            </div>
            <div className="form-control">
              <input
                type="text"
                {...register("photoUrl", { required: true })}
                name="photoUrl"
                placeholder="Photo url..."
                className="input input-bordered h-8"
                aria-invalid={errors.photoUrl ? "true" : "false"}
              />

              {errors.name?.type === "required" && (
                <p className="text-red-600 text-xs mt-" role="alert">
                  Photo url is required
                </p>
              )}
            </div>
            <div className="form-control">
              <input
                type="text"
                {...register("email", { required: true })}
                name="email"
                placeholder="Email..."
                className="input input-bordered h-8"
                aria-invalid={errors.name ? "true" : "false"}
              />
              {errors.email?.type === "required" && (
                <p className="text-red-600 text-xs mt-" role="alert">
                  Email is required
                </p>
              )}
            </div>
            <div className="form-control">
              <input
                type="password"
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
                <p className="text-red-600 text-xs mt-" role="alert">
                  Password is required
                </p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600 text-xs mt-" role="alert">
                  Password should be at least 6 chars.
                </p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-600 text-xs mt-" role="alert">
                  Password max length is 20 chars.
                </p>
              )}
            </div>
            <div className="form-control">
              <input
                type="password"
                name="confirmPassword"
                {...register("confirmPassword", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                })}
                placeholder="Confirm password..."
                className="input input-bordered h-8"
                aria-invalid={errors.password ? "true" : "false"}
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600 text-xs mt-" role="alert">
                  Confirm password is required
                </p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600 text-xs mt-" role="alert">
                  Confirm password should be at least 6 chars.
                </p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-600 text-xs mt-" role="alert">
                  Confirm password max length is 20 chars.
                </p>
              )}
            </div>
            <label className="label">
              <div className="label-text-alt link link-hover">
                <Link className="text-indigo-500" to="/login">
                  <span className="text-indigo-500">
                    <i>Already a member ?</i>
                  </span>
                  <span className="text-indigo-500">
                    <i> Please Login</i>
                  </span>
                </Link>
              </div>
            </label>
            <div className="form-control h-8">
              <button type="submit" className="btn btn-primary">
                Sign up{" "}
              </button>
            </div>
          </form>
          <SocialLogIn />
        </div>
      </div>
    </>
  );
};

export default SignUp;
