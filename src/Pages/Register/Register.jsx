import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import GoogleAndGithub from "../../Components/Common/GoogleAndGithub";
import Button from "../../Components/Common/Button";

const Register = () => {
  const [isShow, setIsShow] = useState(false);
    const { createUser, user} = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
      try {
        const res = await createUser(data.email, data.password)
          console.log(res.user);
          
      }catch(err){
          console.log(err.message);
      }
      
  };

    console.log(user);
  return (
    <div className="py-16">
      <div className="flex flex-row-reverse bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-screen-xl gap-5">
        <div className="hidden lg:block lg:w-1/2 bg-cover">
          <img src="https://i.postimg.cc/RC8q2kNf/login.jpg" alt="" />
        </div>
        <div className="w-full p-8 lg:w-1/2">
          <h2 className="text-3xl font-bold text-[#ef6f18] text-center">
            Please Register !
          </h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Your name
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="text"
                {...register("name", { required: true })}
                placeholder="your name"
                id="name"
                name="name"
                autoComplete="name"
              />
              {errors.name && <p className="text-red-600">Name is Required</p>}
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Your Photo
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="file"
                {...register("photo", { required: true })}
                id="photo"
                name="photo"
              />
              {errors.photo && (
                <p className="text-red-600">Photo is Required</p>
              )}
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
                <p className="text-red-600">Email is Required</p>
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
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
                })}
                placeholder="password"
              />
              {errors.password && (
                <p className="text-red-600">password is Required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500">password must be 6 characters</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-500">
                  password must less then 20 characters
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-500">
                  password must be 1 uppercase 1 special characters & 
                </p>
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
                value="Register"
                className=" text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
              >
                Register
              </Button>
            </div>
          </form>
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 md:w-1/4"></span>
            <Link
              to="/login"
              className="text-xs text-gray-500 uppercase text-center"
            >
              all ready have account ? please{" "}
              <span className="font-bold border p-2 hover:rounded-full hover:bg-[#ef6f18] hover:text-white text-[#ef6f18]">
                Login
              </span>
            </Link>
            <span className="border-b w-1/5 md:w-1/4"></span>
          </div>
          <p className="text-xs text-center text-gray-500 uppercase  mt-5">
            or login with Google
          </p>

          <span className="border-b w-1/5 lg:w-1/4"></span>
          <GoogleAndGithub></GoogleAndGithub>
        </div>
      </div>
    </div>
  );
};

export default Register;
