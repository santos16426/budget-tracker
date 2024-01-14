"use client";
import React, { useState } from "react";
import {
  Coins,
  CreditCard,
  Gem,
  Indent,
  Library,
  PanelLeftOpen,
  PanelRightOpen,
  PiggyBank,
  Settings,
  TextQuote,
  Users,
} from "lucide-react";
import { useAppContext } from "@/context";
import { cn } from "@/lib";
type Props = {
  children: React.ReactNode;
};

const LayoutWrapper = ({ children }: Props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const { activePage } = useAppContext();

  return (
    <div className="h-screen w-full flex flex-row">
      <div
        className={cn(
          "flex flex-col h-full transition-all transform w-16 shadow-lg",
          {
            "w-[20%]": isSidebarOpen,
          }
        )}
      >
        <div className="px-1 h-16">
          <div className="flex flex-row text-primary font-bold text-center items-center w-full h-full">
            <p className="text-2xl visible transition-all w-full cursor-pointer">
              {isSidebarOpen ? "Budget Tracker" : "BT"}
            </p>
          </div>
        </div>
        <div className="flex flex-col flex-grow"></div>
      </div>
      <div className="flex flex-col w-full">
        <div className="w-full flex flex-row items-center px-1 min-h-16 shadow-lg">
          <div
            className={cn(
              "transition-transform transform cursor-pointer duration-300",
              isSidebarOpen ? "scale-x-1" : "scale-x-[-1]"
            )}
            onClick={() => setIsSidebarOpen((prev) => !prev)}
          >
            <PanelRightOpen size={25} />
          </div>
          <div className="flex flex-grow transition-transform transform">
            header
          </div>
        </div>
        <div className="h-full p-5 relative">
          <div className="bg-slate-300 h-full rounded-sm">{children}</div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-xs">
            Copyright 2024 Billy Joe Santos
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutWrapper;
