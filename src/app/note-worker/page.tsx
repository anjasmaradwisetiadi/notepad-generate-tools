'use client';
import { TabItem, Tabs } from "flowbite-react";
import { HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import  GenerateTools  from "./generate-tools/GenerateTools";
import Notepad from "./notepad/Notepad";

export default function NoteWorker() {
    return (
      <div className=" w-screen flex px-8 py-2">
        <Tabs aria-label="Default tabs" variant="default" className="w-full">
          <TabItem active title="Generate Tools" icon={HiUserCircle} className="w-full">
            <GenerateTools/>
          </TabItem>
          <TabItem title="NotePad" icon={MdDashboard} className="w-full">
            <Notepad/>
          </TabItem>
        </Tabs>
      </div>
  );
}