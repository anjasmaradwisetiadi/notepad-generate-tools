"use client";
import { TabItem, Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import CamelCase from "./camel-case/CamelCase";
import GenerateText from "./generate-text/GenerateText";
import StripeCase from "./stripcase-case/StripCase";
import TypingInterface from "./typing-interface/TypingInterface";

export default function GenerateTools() {
  return (
    <div className="w-full flex px-8 py-2">
      <Tabs aria-label="Default tabs" variant="default" className="w-full">
        <TabItem active title="Snake Case" icon={MdDashboard} className="w-full">
          <GenerateText />
        </TabItem>
        <TabItem title="Typing Interface" icon={HiClipboardList} className="w-full">
          <TypingInterface />
        </TabItem>
        <TabItem title="Camel Case" icon={HiUserCircle} className="w-full">
          <CamelCase />
        </TabItem>
        <TabItem title="Stripe Case" icon={HiAdjustments} className="w-full">
          <StripeCase />
        </TabItem>
      </Tabs>
    </div>
  );
}
