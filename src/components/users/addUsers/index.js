import React, { useState } from "react";
import styles from "./index.module.css";
import { Avatar } from "@nextui-org/react";
import Dropzone from "react-dropzone";

const AddUsers = () => {
  const [avatarImage, setAvatarImage] = useState(
    "https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg",
  );

  const handleDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = () => {
      setAvatarImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const [user, setUser] = useState({
    userName: "",
    emailAddress: "",
    telephoneNumber: "",
    status: "",
    password: "",
    userImage: avatarImage,
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("user:", user);
  };

  return (
    <>
      <div className={styles.mainDiv}>
        <div>
          <Dropzone onDrop={handleDrop} accept="image/*" multiple={false}>
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()} className={styles.profileImage}>
                <input {...getInputProps()} />
                <Avatar
                  size="xl"
                  src={avatarImage}
                  color="success"
                  bordered
                  borderWeight="bold"
                />
                <div className={styles.profileText}>
                  Drag image here <br /> or
                  <br /> Click to browse.
                </div>
              </div>
            )}
          </Dropzone>
        </div>

        <div className={styles.addUserForm}>
          <div className={styles.topGrnForm}>
            <div className={styles.leftGrnForm}>
              <div className={styles.leftGrnFormInput}>
                <text>User Name</text>
                <input
                  type="text"
                  name="userName"
                  value={user.userName}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.leftGrnFormInput}>
                <text>telephoneNumber</text>
                <input
                  type="text"
                  name="telephoneNumber"
                  value={user.telephoneNumber}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.leftGrnFormInput}>
                <text>Password</text>
                <input
                  type="text"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className={styles.rightGrnForm}>
              <div className={styles.leftGrnFormInput}>
                <text>emailAddress</text>
                <input
                  type="text"
                  name="emailAddress"
                  value={user.emailAddress}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.leftGrnFormInput}>
                <text>Status</text>
                <select
                  name="status"
                  value={user.status}
                  onChange={handleChange}
                >
                  <option value="">Select Options</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
            </div>
          </div>
          <div className={styles.bottomGrnForm}>
            <div className={styles.bottomGrnDownForm}>
              <div className={styles.buttonGroup}>
                <button className={styles.submitButton} onClick={handleSubmit}>
                  Add User
                </button>
                <button className={styles.editButton}>View Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddUsers;
