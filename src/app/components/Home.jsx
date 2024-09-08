"use client";
import React from "react";
import SidebarMain from "./sidebar/SidebarMain";
import MessageContainerMain from "./messageContainer/MessageContainerMain";
const MainComponent = () => {
  return (
    <>
      <div className=" flex flex-row h-screen ">
        <SidebarMain />
        <MessageContainerMain />
      </div>
    </>
  );
};

export default MainComponent;
