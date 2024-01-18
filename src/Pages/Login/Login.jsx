import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { BsEyeFill, BsEyeSlashFill, } from "react-icons/bs";
import useAuth from "../../Hooks/useAuth";
import GoogleAndGithub from "../../Components/Common/GoogleAndGithub";
import Button from "../../Components/Common/Button";
import Swal from "sweetalert2";

const Login = () => {
    const [isShow, setIsShow] = useState(false);
    const {login, } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
      try {
          const res = login(data.email, data.password);
          Swal.fire({
            position: "top",
            icon: "success",
            title: "User logged in successfully",
            showConfirmButton: false,
            timer: 1500
          });
          console.log(res);
      } catch (err) {
        //   console.log(err.message);
          Swal.fire({
            position: "top",
            icon: "error",
            title: `${err.message}`,
            showConfirmButton: false,
            timer: 1500
          });
        }
      
  };

    // console.log(user);
    
    
  return (
    <div className="py-16">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-screen-xl">
        <div className="hidden lg:block lg:w-1/2 bg-cover">
          <img src="https://i.postimg.cc/RC8q2kNf/login.jpg" alt="" />
        </div>
        <div className="w-full p-8 lg:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-700 text-center">
           Please Login !
          </h2>
                  <div>
                      <GoogleAndGithub></GoogleAndGithub>
         </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 lg:w-1/4"></span>
              <p className="text-xs text-center text-gray-500 uppercase">
                or login with email
              </p>
              <span className="border-b w-1/5 lg:w-1/4"></span>
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email Address
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="email"
                {...register("email", { required: true })}
                placeholder="your email"
                id="email"
                name="email"
                autoComplete="email"
                          />
                           {errors.email && (
                <p className="text-red-600">email is Required</p>
              )}
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <a href="#" className="text-xs text-gray-500">
                  Forget Password?
                </a>
              </div>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                id="password"
                name="password"
                autoComplete="email"
                type={isShow ? "text" : "password"}
                {...register("password", { required: true })}
                placeholder="password"
                          />
                           {errors.password && (
                <p className="text-red-600">password is Required</p>
              )}
              <div onClick={() => setIsShow(!isShow)} className="ml-2 mt-3">
                {isShow ? (
                  <BsEyeFill className="text-xl" />
                ) : (
                  <BsEyeSlashFill className="text-xl" />
                )}
              </div>
            </div>
            <div className="mt-8">
              <Button
                              type="submit"
                              value="Login"
                className="bg-[#ef6f18] text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
              >
              </Button>
            </div>
          </form>
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 md:w-1/4"></span>
            <Link to='/register' className="text-xs text-gray-500 uppercase">
              or <span className="font-bold border p-2 hover:rounded-full hover:bg-[#ef6f18] hover:text-white text-[#ef6f18]">Register</span>
            </Link>
            <span className="border-b w-1/5 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
