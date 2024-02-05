"use client";
import react, { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
// import { useRouter } from 'next/router';
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // ตรวจสอบ username และ password จริง
    if (username === "admin" && password === "password") {
      // ถ้าถูกต้องให้ redirect ไปที่หน้าเรก
      router.push("/main/home");
    } else {
      // ถ้าไม่ถูกต้อง ให้ทำอะไรก็ตามที่คุณต้องการ เช่น แสดงข้อความผิดพลาด
      console.log("Invalid username or password");
    }
  };

  return (
    <div className="h-full flex justify-content-center flex-column align-items-center">
      <div className="flex-column justify-content-center">
        {/* <div className="col-6"> */}
        <h2 className="">Login</h2>
        {/* </div> */}
      </div>
      <div className="w-20rem justify-content-center">
        <div className="p-fluid ">
          <div className="p-field">
            <label htmlFor="username">Username</label>
            <InputText
              id="username"
              className="mt-2"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="p-field ">
            <label htmlFor="password">Password</label>
            <InputText
              type="password"
              id="password"
              className="mt-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button label="Login" className="mt-4" onClick={handleLogin} />
        </div>
      </div>
    </div>
  );
};

export default Login;
