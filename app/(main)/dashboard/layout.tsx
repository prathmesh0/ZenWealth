import React, { Suspense } from "react";
import { BarLoader } from "react-spinners";
import Dashboard from "./page";

const DashboardLayout = () => {
  return (
    <div className="px-5 ">
      <h1 className="text-6xl font-bold gradient-title">Dashboard</h1>
      <Suspense
        fallback={
          <BarLoader className="mt-4 " width={"100%"} color="#9333ea" />
        }
      >
        <Dashboard />
      </Suspense>
    </div>
  );
};

export default DashboardLayout;
