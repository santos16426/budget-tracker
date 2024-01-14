"use client";
import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
type Props = {
  children: React.ReactNode;
};

const LayoutWrapper = ({ children }: Props) => {
  return (
    <>
      <div className="h-screen w-full hidden md:flex flex-row">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Header />
          <div className="h-full p-5 relative">
            <div className="bg-slate-300 h-full rounded-sm">{children}</div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-xs">
              Copyright 2024 Billy Joe Santos
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:hidden flex-col justify-center items-center">
        <p>Not available on mobile</p>
      </div>
    </>
  );
};

export default LayoutWrapper;
