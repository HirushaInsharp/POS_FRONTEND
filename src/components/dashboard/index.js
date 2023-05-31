import React from "react";
import styles from "./index.module.css";
import DashboardSingleCard from "./dashboardSingleCard";


const dashboardCardDetails = [
  {
    name: "Today’s Sales",
    min: 30000,
    max: 40000,
    icon: ""
  },
  {
    name: "Today’s revenue",
    min: 10000,
    max: 15000,
    icon: ""
  },
  {
    name: "Today’s Customers",
    min: 20,
    max: 100,
    icon: ""
  },
  {
    name: "Today’s  total orders",
    min: 1,
    max: 8,
    icon: ""
  },
];

const Dashboard = () => {

  const randomNimer = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  return (
    <>
      <div className={styles.mainDiv}>
        <div className={styles.componentDiv}>
          <h2>Dashboard</h2>
          <div className={styles.dashboardCardList}>
            {dashboardCardDetails.map((item,key) => {
              return (
                <DashboardSingleCard key={key} name={item.name} amount={randomNimer(item.min, item.max)} icon={item.icon} />
              )
            })}
           
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
