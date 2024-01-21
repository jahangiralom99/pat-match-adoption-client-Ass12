import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const GoogleAndGithub = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const axios = useAxiosPublic();

  const { googleLogin } = useAuth();

  const handleGoogleLogIn = async () => {
    try {
      await googleLogin().then((result) => {
        const userInfo = {
          email: result.user.email,
          name: result.user.displayName,
        };
        axios.post("/users", userInfo)
          .then(res => {
            // console.log(res);
            Swal.fire({
              position: "top",
              icon: "success",
              title: "Google logged in successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            navigation(location.state ? location.state : "/");
        })
       
      });
    } catch (err) {
      console.log(err);
      Swal.fire({
        position: "top",
        icon: "error",
        title: `${err.message}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div>
      <div
        onClick={handleGoogleLogIn}
        className="flex cursor-pointer items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
      >
        <div className="px-4 py-3">
          <svg className="h-6 w-6" viewBox="0 0 40 40">
            <path
              d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
              fill="#FFC107"
            />
            <path
              d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
              fill="#FF3D00"
            />
            <path
              d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
              fill="#4CAF50"
            />
            <path
              d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
              fill="#1976D2"
            />
          </svg>
        </div>
        <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">
          Sign in with Google
        </h1>
      </div>
      <div className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
        <div className="px-4 py-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 48 48"
          >
            <path
              fill="#fff"
              d="M41,24c0,9.4-7.6,17-17,17S7,33.4,7,24S14.6,7,24,7S41,14.6,41,24z"
            ></path>
            <path
              fill="#455a64"
              d="M21,41v-5.5c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5V41h2v-6.5c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5	V41h2v-5.5c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5V41h1.8c0.2-0.3,0.2-0.6,0.2-1.1V36c0-2.2-1.9-5.2-4.3-5.2h-2.5	c-2.3,0-4.3,3.1-4.3,5.2v3.9c0,0.4,0.1,0.8,0.2,1.1H21L21,41z M40.1,26.4L40.1,26.4c0,0-1.3-0.4-2.4-0.4h-0.1	c-1.1,0-2.9,0.3-2.9,0.3c-0.1,0-0.1,0-0.1-0.1s0-0.1,0.1-0.1s2-0.3,3.1-0.3s2.4,0.4,2.5,0.4s0.1,0.1,0.1,0.2	C40.2,26.3,40.2,26.4,40.1,26.4z M39.8,27.2L39.8,27.2c0,0-1.4-0.4-2.6-0.4c-0.9,0-3,0.2-3.1,0.2S34,27,34,26.9s0-0.1,0.1-0.1	s2.2-0.2,3.1-0.2c1.3,0,2.6,0.4,2.6,0.4c0.1,0,0.1,0.1,0.1,0.2C39.9,27.1,39.9,27.2,39.8,27.2z M7.8,26.4c-0.1,0-0.1,0-0.1-0.1	s0-0.1,0.1-0.2c0.8-0.2,2.4-0.5,3.3-0.5c0.8,0,3.5,0.2,3.6,0.2s0.1,0.1,0.1,0.1c0,0.1-0.1,0.1-0.1,0.1s-2.7-0.2-3.5-0.2	C10.1,26,8.6,26.2,7.8,26.4L7.8,26.4z M8.2,27.9c0,0-0.1,0-0.1-0.1s0-0.1,0-0.2c0.1,0,1.4-0.8,2.9-1c1.3-0.2,4,0.1,4.2,0.1	c0.1,0,0.1,0.1,0.1,0.1c0,0.1-0.1,0.1-0.1,0.1l0,0c0,0-2.8-0.3-4.1-0.1C9.6,27.1,8.2,27.9,8.2,27.9L8.2,27.9z"
            ></path>
            <path
              fill="#455a64"
              d="M14.2,23.5c0-4.4,4.6-8.5,10.3-8.5s10.3,4,10.3,8.5S31.5,31,24.5,31S14.2,27.9,14.2,23.5z"
            ></path>
            <path
              fill="#455a64"
              d="M28.6,16.3c0,0,1.7-2.3,4.8-2.3c1.2,1.2,0.4,4.8,0,5.8L28.6,16.3z M20.4,16.3c0,0-1.7-2.3-4.8-2.3	c-1.2,1.2-0.4,4.8,0,5.8L20.4,16.3z M20.1,35.9c0,0-2.3,0-2.8,0c-1.2,0-2.3-0.5-2.8-1.5c-0.6-1.1-1.1-2.3-2.6-3.3	c-0.3-0.2-0.1-0.4,0.4-0.4c0.5,0.1,1.4,0.2,2.1,1.1c0.7,0.9,1.5,2,2.8,2s2.7,0,3.5-0.9L20.1,35.9z"
            ></path>
            <path
              fill="#00bcd4"
              d="M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z M24,40c-8.8,0-16-7.2-16-16S15.2,8,24,8	s16,7.2,16,16S32.8,40,24,40z"
            ></path>
          </svg>
        </div>
        <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">
          Sign in with Github
        </h1>
      </div>
    </div>
  );
};

export default GoogleAndGithub;
