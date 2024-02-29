"use client";
import react, { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Image } from "primereact/image";
// import { useRouter } from 'next/router';
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // console.log("enter");
    if (username === "admin" && password === "password") {
      router.push("/home");
    } else {
      console.log("Invalid username or password");
    }
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="h-full flex justify-content-center flex-column align-items-center" style={{ "backgroundColor": "#364150"}}>
      <div className="card flex flex-column justify-content-center align-items-center ">
        <div className="flex-column justify-content-center mb-0">
          {/* <div className="col-6"> */}
          {/* <h2 className="mr-auto ml-auto">Login</h2> */}
          {/* <div className="flex justify-content-center"> */}
          <Image src="/Logo-Ocean_login.png" alt="" height="50px" />
          <p className="text-center text-400 m-0 text-sm">
            Version 24.x.x
          </p>
          <p className="text-center text-400 m-0 mb-5 text-sm">
            Build 1/1/2024 12:20:22 PM
          </p>
          {/* </div> */}
          {/* </div> */}
        </div>
        <div className="w-20rem justify-content-center">
          <div className="p-fluid ">
            <span className="p-float-label mt-4">
              <InputText
                id="username"
                value={username}
                className="border-2"
                onChange={(e) => setUsername(e.target.value)}
              />
              <label htmlFor="username">Username</label>
            </span>

            <span className="p-float-label mt-4">
              <InputText
                id="password"
                type="password"
                className="border-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={handleKeyPress}
              />
              <label htmlFor="password">Password</label>
            </span>
            <p className="text-primary">Forgot Password?</p>
            <Button
              label="Login"
              className="mt-6"
              onClick={handleLogin}
              onKeyDown={handleLogin}
            />
          </div>
        </div>
      </div>
      <p className="pt-3 text-500">Copyright © 2024, Brink's Incorporated. All Rights Reserved.</p>
    </div>
  );
};

export default Login;
