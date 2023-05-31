import React, { useState } from "react";
import styles from "./index.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

// material UI
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const loginCredential = {
  username: "admin@gmail.com",
  password: "123456",
};

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorShow, setErrorShow] = useState(false);

  // need to add check email regex

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Handle login logic here
    console.log("email", email);
    console.log("password", password);
    if (
      email === loginCredential.username &&
      password === loginCredential.password
    ) {
      setErrorShow(false);
      router.push("/dashboard");
      setEmail("");
      setPassword("");
    } else {
      setErrorShow(true);
    }
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0} columns={16}>
          <Grid item xs={8}>
            <Image src={"/loginImage.png"} alt="" height={750} width={650} />
          </Grid>
          <Grid item xs={8}>
            <div className={styles.mainDiv}>
              <Image
                src={"/logo.png"}
                alt=""
                height={60}
                width={50}
                className={styles.logoImage}
              />
              <div className={styles.loginDiv}>
                <h2>Login</h2>
                <div className={styles.inputFiled}>
                  <label>
                    E - mail{" "}
                    <span
                      className={errorShow ? styles.error : styles.errorHide}
                    >
                      Please enter correct email
                    </span>{" "}
                  </label>
                  <input
                    value={email}
                    type="text"
                    name="username"
                    placeholder="Enter your Email"
                    onChange={handleEmailChange}
                  />
                </div>
                <div className={styles.inputFiled}>
                  <label>
                    Password{" "}
                    <span
                      className={errorShow ? styles.error : styles.errorHide}
                    >
                      Please enter correct password
                    </span>
                  </label>

                  <input
                    value={password}
                    type="password"
                    name="password"
                    placeholder="Enter your Password"
                    onChange={handlePasswordChange}
                  />
                </div>

                <div className={styles.loginButton} onClick={handleLogin}>
                  Login
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Login;
