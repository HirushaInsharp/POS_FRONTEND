import React from "react";
import Image from "next/image";
import styles from "./index.module.css";
import DashboardIconList from "./dashboardIconList";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <div className={styles.mainDiv}>
        <div className={styles.leftDiv}>
          <div className={styles.profileDiv}>
            <div className={styles.profileImageDiv}>
              <Image
                src={"/profileImage.jpg"}
                alt="profile"
                width={50}
                height={50}
                style={{ objectFit: "cover", borderRadius: "50%" }}
              />
            </div>
            <div className={styles.profileDetailsDiv}>
              <p>Profile Name</p>
              <p>Admin</p>
            </div>
          </div>
          <div className={styles.sideMenuDiv}>
            <DashboardIconList />
          </div>
        </div>
        <div className={styles.rightDiv}>{children}</div>
      </div>
    </>
  );
};

export default DashboardLayout;
