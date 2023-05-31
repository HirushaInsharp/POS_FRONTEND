import React from "react";
import styles from "./index.module.css";
import { RxDashboard } from "react-icons/rx";
import { AiTwotoneShop, AiTwotoneSetting } from "react-icons/ai";
import { FaFileInvoice } from "react-icons/fa";
import { SlSocialDropbox } from "react-icons/sl";
import { MdPeopleAlt } from "react-icons/md";
import { IoMdAnalytics } from "react-icons/io";
import { HiUserGroup } from "react-icons/hi";
import { VscPreview } from "react-icons/vsc";
import { useRouter } from "next/router";

const dashboardList = [
  {
    name: "dashboard",
    routerName: "dashboard",
    icon: <RxDashboard />,
  },
  {
    name: "GRN",
    routerName: "grn",
    icon: <AiTwotoneShop />,
  },
  {
    name: "invoices",
    routerName: "invoices",
    icon: <FaFileInvoice />,
  },
  {
    name: "GRN View",
    routerName: "grn-view",
    icon: <SlSocialDropbox />,
  },
  {
    name: "Invoice View",
    routerName: "invoice-view",
    icon: <VscPreview />,
  },
  {
    name: "Stock View",
    routerName: "stock-view",
    icon: <IoMdAnalytics />,
  },
  {
    name: "customer",
    routerName: "customer",
    icon: <MdPeopleAlt />,
  },
  {
    name: "users",
    routerName: "users",
    icon: <HiUserGroup />,
  },
  {
    name: "settings",
    routerName: "settings",
    icon: <AiTwotoneSetting />,
  },
];

const DashboardIconList = () => {
  const router = useRouter();

  const menuItemClickHandle = (routerName) => {
    router.push(`/${routerName}`);
  };

  return (
    <>
      <div className={styles.mainDiv}>
        {dashboardList.map((item, key) => {
          return (
            <div
              className={styles.iconDiv}
              key={key}
              onClick={() => {
                menuItemClickHandle(item.routerName);
              }}
            >
              <div className={styles.icon}>
                {item.icon}
                <p>{item.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DashboardIconList;
