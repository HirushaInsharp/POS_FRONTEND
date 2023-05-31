import React from "react";
import Head from "next/head";
import DashboardLayout from "@/components/dashboardLayout";
import { useRouter } from "next/router";
import GRN from "@/components/grn";

const GRNPage = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>GRN Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <DashboardLayout>
          <GRN />
        </DashboardLayout>
      </div>
    </>
  );
};

export default GRNPage;