import React from "react";
import userImg from "../public/user.png";
import Image from "next/image";
const forgetpassword = (props) => {
  return (
    <div className="h-screen font-inter  ">
      <div className="forgetpassword-container flex  ">
        <div className="background-auth w-full lg:flex hidden items-center justify-center h-screen p-10 bg-[#060825] text-white">
          <div className="content flex flex-col">
            <h1 className=" auth-connect-heading ">
              Connect
              <br />
              with Amazing <br /> Africa Movies
            </h1>

            <div className="user-image self-center py-5">
              <Image src={userImg} alt="user" />
            </div>
          </div>
        </div>

        <div className="signin-form bg-white w-full h-screen px-10 py-14">
          <h1 className="auth-screen-heading">Forgotton Password</h1>
          <h3 className="auth-screen-heading2">
            Forgotten password ? Enter your email address
          </h3>

          <form className="py-12">
            <div className="email py-5 w-full">
              <input
                type={"email"}
                className="p-4 w-full bg-[#FAFAFA] border rounded-md outline-none border-[#E3E0E0]"
                placeholder="Email "
              />
            </div>

            <div className="py-4">
              <p className="text-primary text-xl font-semibold">
                Forgotten Password ?
              </p>
            </div>

            <div className="button flex justify-center items-center w-full mx-auto mt-10 ">
              <button
                type="submit"
                className="p-5 rounded-xl w-96 bg-primary text-center text-white font-black"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default forgetpassword;
